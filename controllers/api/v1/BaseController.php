<?php

namespace app\controllers\api\v1;

use app\Core\Services\AccessService;
use Yii;
use yii\web\Controller;

class BaseController extends Controller
{
    private $accessService;

    private $token;
    private $email;
    private $username;
    private $testId;
    private $testType; // test or rating

    public function __construct($id, $module, $config = [])
    {
        $this->accessService = new AccessService();

        parent::__construct($id, $module, $config = []);
    }

    public function beforeAction($action)
    {
        $this->token = Yii::$app->request->get('token');
        $this->email = Yii::$app->request->get('email');
        $this->username = Yii::$app->request->get('user_name');
        $this->testId = Yii::$app->request->get('test_id');
        $this->testType = Yii::$app->request->get('test_type');

//        if(!$this->accessService->accessToTest(
//            $this->token,
//            $this->email,
//            $this->username,
//            $this->testId,
//            $this->testType
//        )) {
//            $this->asJson([
//                'code' => 'ERROR',
//                'message' => 'Access denied.',
//            ]);
//
//            return false;
//        }

        return parent::beforeAction($action);
    }

    public function behaviors()
    {
        return [
            'contentNegotiator' => [
                'class' => \yii\filters\ContentNegotiator::class,
                'formatParam' => '_format',
                'formats' => [
                    'application/json' => \yii\web\Response::FORMAT_JSON
                ],
            ],
        ];
    }
}

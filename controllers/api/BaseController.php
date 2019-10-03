<?php

namespace app\controllers\api;

use app\Core\Services\AccessService;
use Yii;
use yii\web\Controller;

class BaseController extends Controller
{
    private $accessService;
    
    public function __construct($id, $module, $config = [])
    {
        $this->accessService = new AccessService();

        parent::__construct($id, $module, $config = []);
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

    public function beforeAction($action)
    {
        $token = Yii::$app->request->get('token');
        $email = Yii::$app->request->get('email');
        $testHash = Yii::$app->request->get('test');

//        if(!$this->accessService->accessToTest($token, $email, $testHash)) {
//            $this->asJson([
//                'code' => 'ERROR',
//                'message' => 'Access denied.',
//            ]);
//
//            return false;
//        }

        return parent::beforeAction($action);
    }
}

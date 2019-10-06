<?php

namespace app\controllers\admin;

use app\Core\Services\AccessService;
use Yii;
use yii\web\Controller;

class BaseController extends Controller
{
    private $accessService;

    private $token;
    private $email;
    private $username;
    private $userRole;

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
        $this->userRole = Yii::$app->request->get('user_role');

        if(!$this->accessService->accessToAdmin(
            $this->token,
            $this->email,
            $this->username,
            $this->userRole
        )) {
            $this->asJson([
                'code' => 'ERROR',
                'message' => 'Access denied.',
            ]);

            return false;
        }

        return parent::beforeAction($action);
    }
}

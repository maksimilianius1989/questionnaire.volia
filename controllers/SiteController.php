<?php

namespace app\controllers;

use app\Core\Services\AccessService;
use Yii;
use yii\web\Controller;

class SiteController extends Controller
{
    private $accessService;
    
    public function __construct($id, $module, $config = [])
    {
        $this->accessService = new AccessService();

        parent::__construct($id, $module, $config = []);
    }

    public function beforeAction($action)
    {
        $token = Yii::$app->request->get('token');
        $email = Yii::$app->request->get('email');
        if(!$this->accessService->compareToken($token, $email)) {
            echo json_encode(['status' => 'access denied!']);
            die;
        }

        return parent::beforeAction($action);
    }
    
    public function actionIndex()
    {
        $token = Yii::$app->request->get('token');
        $email = Yii::$app->request->get('email');
        $username = Yii::$app->request->get('username');
        $testHash = Yii::$app->request->get('test');

        print_r(Yii::$app->request->get());

        return;

//        return $this->render('index');
    }
}

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
        $testHash = Yii::$app->request->get('test');

        if(!$this->accessService->accessToTest($token, $email, $testHash)) {
            echo json_encode(['status' => 'Access denied']);
            die;
        }

        return parent::beforeAction($action);
    }

    ///?token=[md5(sole + email + date('d-m-Y'))]&email=test@test.com&username=Maks%20Ivanov&test=098f6bcd4621d373cade4e832627b4f6
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

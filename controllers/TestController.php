<?php

namespace app\controllers;

use Yii;

class TestController extends BaseController
{

    ///?token=[md5(sole + email + date('d-m-Y'))]&email=test@test.com&username=Maks%20Ivanov&test=098f6bcd4621d373cade4e832627b4f6
    public function actionIndex()
    {
        $token = Yii::$app->request->get('token');
        $email = Yii::$app->request->get('email');
        $username = Yii::$app->request->get('username');
        $testHash = Yii::$app->request->get('test');

        return ['test' => 'index'];
    }
}

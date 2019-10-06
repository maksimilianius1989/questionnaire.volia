<?php

namespace app\controllers\admin;

class HomeController extends BaseController
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionSetSetting()
    {
        
    }
}

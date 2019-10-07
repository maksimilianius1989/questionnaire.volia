<?php

namespace app\controllers\api\v1;

use Yii;

class RatingController extends BaseController
{
    ///?token=[md5(sole + email + date('d-m-Y'))]&email=test@test.com&username=Maks%20Ivanov&rating_id=1
    public function actionIndex()
    {
        // должна использоватея еще систима рандома для пользователей
        return [
            'id' => 1,
            'author' => 'Иван Иванов',
            'title' => 'Название опросника',
            'description' => 'Здесь описание опросинка',
            'icons_src' => [
                'red' => 'http://questionnaire.volia.loc/images/red-smile.png',
                'orange' => 'http://questionnaire.volia.loc/images/orange-smile.png',
                'green' => 'http://questionnaire.volia.loc/images/green-smile.png',
            ],
            'questions' => [
                [
                    'description' => 'Вопрос опросник 1',
                    'maximum_score' => 10,
                    'id' => 1,
                ],
                [
                    'description' => 'Вопрос опросник 2',
                    'maximum_score' => 10,
                    'id' => 2,
                ],
                [
                    'description' => 'Вопрос опросник 3',
                    'maximum_score' => 10,
                    'id' => 3,
                ],
                [
                    'description' => 'Вопрос опросник 4',
                    'maximum_score' => 10,
                    'id' => 4,
                ],
                [
                    'description' => 'Вопрос опросник 5',
                    'maximum_score' => 10,
                    'id' => 5,
                ],
                [
                    'description' => 'Вопрос опросник 6',
                    'maximum_score' => 10,
                    'id' => 6,
                ],
                [
                    'description' => 'Вопрос опросник 7',
                    'maximum_score' => 10,
                    'id' => 7,
                ],
                [
                    'description' => 'Вопрос опросник 8',
                    'maximum_score' => 10,
                    'id' => 8,
                ],
                [
                    'description' => 'Вопрос опросник 9',
                    'maximum_score' => 10,
                    'id' => 9,
                ],
                [
                    'description' => 'Вопрос опросник 10',
                    'maximum_score' => 10,
                    'id' => 10,
                ],
            ],
        ];
    }

    public function actionCreate()
    {

    }
}

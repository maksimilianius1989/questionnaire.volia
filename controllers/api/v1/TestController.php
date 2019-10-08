<?php

namespace app\controllers\api\v1;

use app\Core\Services\AccessService;
use Yii;
use yii\rest\Controller;

class TestController extends Controller
{
    const TYPE_RATING = 'rating';
    const TYPE_TEST = 'test';

    protected $accessService;

    protected $token;
    protected $email;
    protected $userName;
    protected $testId;
    protected $testType; // test or rating
    protected $answerList;

    public function __construct($id, $module, $config = [])
    {
        $this->accessService = new AccessService();
        $this->enableCsrfValidation = false;
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
        $this->testId = Yii::$app->request->getQueryParam('id');
        $this->testType = Yii::$app->request->getQueryParam('type');

        return parent::beforeAction($action);
    }

    ///?token=[md5(sole + email + date('d-m-Y'))]&email=test@test.com&username=Maks%20Ivanov&test_id=1
    public function actionIndex()
    {
        $this->token = Yii::$app->request->get('token');
        $this->email = Yii::$app->request->get('email');
        $this->userName = Yii::$app->request->get('username');

        $response = [];
        switch ($this->testType) {
            case self::TYPE_RATING:
                $response = $this->rating;
                break;

            case self::TYPE_TEST:
                $response = $this->test;
                break;
        }

        // должна использоватея еще систима рандома для пользователей
        return $response;
    }

    public function actionCreate()
    {
        $headers = Yii::$app->request->getHeaders();
        $this->token = $headers['Authorization'];
        $this->email = Yii::$app->request->post('email');
        $this->userName = Yii::$app->request->post('user_name');
        $this->answerList = json_decode(Yii::$app->request->post('answers_list'));

        return [
            'token' => $this->token,
            'testId' => $this->testId,
            'testType' => $this->testType,
            'email' => $this->email,
            'userName' => $this->userName,
            'answerList' => $this->answerList,
        ];
    }


































    private $test = [
        'id' => 1,
        'type' => 'Тест',
        'email' => 'taras@ivanov.com',
        'user_name' => 'Тарас Иванов',
        'title' => 'Название теста',
        'description' => 'Здесь описание теста',
        'questions' => [
            [
                'description' => 'Вопрос тест 1',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 1,
                        'value' => 'Ответ 1',
                    ],
                    [
                        'id' => 2,
                        'value' => 'Ответ 2',
                    ],
                    [
                        'id' => 3,
                        'value' => 'Ответ 3',
                    ],
                    [
                        'id' => 4,
                        'value' => 'Ответ 4',
                    ],
                ],
                'id' => 1,
            ],
            [
                'description' => 'Вопрос тест 2',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 5,
                        'value' => 'Ответ 5',
                    ],
                    [
                        'id' => 6,
                        'value' => 'Ответ 6',
                    ],
                    [
                        'id' => 7,
                        'value' => 'Ответ 7',
                    ],
                    [
                        'id' => 8,
                        'value' => 'Ответ 8',
                    ],
                ],
                'id' => 2,
            ],
            [
                'description' => 'Вопрос тест 3',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 9,
                        'value' => 'Ответ 9',
                    ],
                    [
                        'id' => 10,
                        'value' => 'Ответ 10',
                    ],
                    [
                        'id' => 11,
                        'value' => 'Ответ 11',
                    ],
                    [
                        'id' => 12,
                        'value' => 'Ответ 12',
                    ],
                ],
                'id' => 3,
            ],
            [
                'description' => 'Вопрос тест 4',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 13,
                        'value' => 'Ответ 13',
                    ],
                    [
                        'id' => 14,
                        'value' => 'Ответ 14',
                    ],
                    [
                        'id' => 15,
                        'value' => 'Ответ 15',
                    ],
                    [
                        'id' => 16,
                        'value' => 'Ответ 16',
                    ],
                ],
                'id' => 4,
            ],
            [
                'description' => 'Вопрос тест 5',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 17,
                        'value' => 'Ответ 17',
                    ],
                    [
                        'id' => 18,
                        'value' => 'Ответ 18',
                    ],
                    [
                        'id' => 19,
                        'value' => 'Ответ 19',
                    ],
                    [
                        'id' => 20,
                        'value' => 'Ответ 20',
                    ],
                ],
                'id' => 5,
            ],
            [
                'description' => 'Вопрос тест 6',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 21,
                        'value' => 'Ответ 21',
                    ],
                    [
                        'id' => 22,
                        'value' => 'Ответ 22',
                    ],
                    [
                        'id' => 23,
                        'value' => 'Ответ 23',
                    ],
                    [
                        'id' => 24,
                        'value' => 'Ответ 24',
                    ],
                ],
                'id' => 6,
            ],
            [
                'description' => 'Вопрос тест 7',
                'isMultiAnswer' => true,
                'answers' => [
                    [
                        'id' => 25,
                        'value' => 'Ответ 25',
                    ],
                    [
                        'id' => 26,
                        'value' => 'Ответ 26',
                    ],
                    [
                        'id' => 27,
                        'value' => 'Ответ 27',
                    ],
                    [
                        'id' => 28,
                        'value' => 'Ответ 28',
                    ],
                ],
                'id' => 7,
            ],
            [
                'description' => 'Вопрос тест 8',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 29,
                        'value' => 'Ответ 29',
                    ],
                    [
                        'id' => 30,
                        'value' => 'Ответ 30',
                    ],
                    [
                        'id' => 31,
                        'value' => 'Ответ 31',
                    ],
                    [
                        'id' => 32,
                        'value' => 'Ответ 32',
                    ],
                ],
                'id' => 8,
            ],
            [
                'description' => 'Вопрос тест 9',
                'isMultiAnswer' => true,
                'answers' => [
                    [
                        'id' => 33,
                        'value' => 'Ответ 33',
                    ],
                    [
                        'id' => 34,
                        'value' => 'Ответ 34',
                    ],
                    [
                        'id' => 35,
                        'value' => 'Ответ 35',
                    ],
                    [
                        'id' => 36,
                        'value' => 'Ответ 36',
                    ],
                ],
                'id' => 9,
            ],
            [
                'description' => 'Вопрос тест 10',
                'isMultiAnswer' => false,
                'answers' => [
                    [
                        'id' => 37,
                        'value' => 'Ответ 37',
                    ],
                    [
                        'id' => 38,
                        'value' => 'Ответ 38',
                    ],
                    [
                        'id' => 39,
                        'value' => 'Ответ 39',
                    ],
                    [
                        'id' => 40,
                        'value' => 'Ответ 40',
                    ],
                ],
                'id' => 10,
            ],
        ],
    ];

    private $rating = [
        'id' => 1,
        'type' => 'Опросник',
        'email' => 'ivan@tarasov.com',
        'user_name' => 'Иван Тарасов',
        'title' => 'Название опросника',
        'description' => 'Здесь описание опросинка',
        'logo_src' => 'http://questionnaire.volia.loc/images/logo.png',
        'icons_src' => [
            'red' => 'http://questionnaire.volia.loc/images/red-smile.png',
            'orange' => 'http://questionnaire.volia.loc/images/orange-smile.png',
            'green' => 'http://questionnaire.volia.loc/images/green-smile.png',
        ],
        'questions' => [
            [
                'description' => 'Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1Вопрос опросник 1',
                'img_src' => 'http://questionnaire.volia.loc/images/asks/ask1.jpg',
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
                'img_src' => 'http://questionnaire.volia.loc/images/asks/ask5.jpg',
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
                'img_src' => 'http://questionnaire.volia.loc/images/asks/ask8.jpg',
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

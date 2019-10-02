<?php

namespace app\Core\Entities;

use yii\db\ActiveRecord;

/**
 * Конкретная сущьность теста,
 * которая уже созданая администратором
 */
class Test extends ActiveRecord
{
    public $id;
    public $base_test_id; // что за тест
    public $start_author; // кто запустил тест
    public $create_at; // время создания
    public $end_date; // время окончания теста
    public $hash; // ключ идентификации теста при авторизации пользователя

    public static function initialization()
    {
        $test = new self();
        $test->id = 2;
        $test->base_test_id = 1;
        $test->start_author = "author@test.com";
        $test->create_at = "01-10-2019";
        $test->end_date = "10-10-2019";
        $test->hash = "098f6bcd4621d373cade4e832627b4f6";

        return $test;
    }

    public function isStart()
    {
        return $this->create_at <= date('d-m-Y') &&
                $this->end_date >= date('d-m-Y');
    }

    public function isFindUser($email)
    {
        return $email === 'test@test.com';
    }
}

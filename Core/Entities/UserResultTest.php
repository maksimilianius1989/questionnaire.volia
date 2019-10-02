<?php

namespace Core\Entities;

use yii\db\ActiveRecord;

/**
 * Результат прохождения теста конкретным пользователем
 */
class UserResultTest extends ActiveRecord
{
    public $id;
    public $test_id; // идетнификатор теста
    public $email; // пользователь, который проходил тест
    public $start_test; // вримя начала прохождения теста
    public $finish_test; // время окончания прохождения теста
}

<?php

namespace app\Core\Entities;

use yii\db\ActiveRecord;

/**
 * Конкретный вопрос с теста
 */
class Ask extends ActiveRecord
{
    public $id;
    public $base_test_id; // с какого теста
    public $value; // текст вопроса
    public $position; // номер вопроса
}

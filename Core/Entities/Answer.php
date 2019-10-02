<?php

namespace app\Core\Entities;

use yii\db\ActiveRecord;

/**
 * Вариант ответа с вопроса
 */
class Answer extends ActiveRecord
{
    public $id;
    public $ask_id;
    public $value;
    public $status; // тип ответа: верный/ложный
    public $position; // позиция ответа в карточке
}

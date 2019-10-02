<?php

namespace Core\Entities;

use yii\db\ActiveRecord;

/**
 * Конкретный ответ конкретного пользователя в конкретном тесте
 */
class UserResultAsk extends ActiveRecord
{
    public $id;
    public $ask_id; // какой вапрос
    public $user_email; // пользователь
    public $answer_id; // какой ответ
    public $other_answer; // другой ответ от вопроса, напривер оценка по шкале
}

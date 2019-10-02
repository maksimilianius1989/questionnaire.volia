<?php

namespace app\Core\Entities;

use yii\db\ActiveRecord;

/**
 * Конкретная сущьность теста,
 * которая уже созданая администратором
 */
class Test extends ActiveRecord
{
    const STATE_DISABLE = 0;
    const STATE_START = 1;
    const STATE_FINISH = 2;

    public $id;
    public $base_test_id; // что за тест
    public $start_author; // кто запустил тест
    public $create_at; // время создания
    public $update_at; // всремя обновления
    public $start_date; // время начала теста
    public $end_date; // время окончания теста
    public $hash; // ключ идентификации теста при авторизации пользователя
}

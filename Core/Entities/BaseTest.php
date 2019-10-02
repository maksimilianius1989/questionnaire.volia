<?php

namespace app\Core\Entities;

use yii\db\ActiveRecord;

/**
 * Шаблон теста, который создается, и в дольнейшем будет запускатся
 */
class BaseTest extends ActiveRecord
{
    const TYPE_TEST = 0; // тест
    const TYPE_MARK = 1; // опросник

    public $id;
    public $scale; // шкала оценки
    public $name; // название теста
    public $description; // описание теста
    public $author; // создатель теста
    public $create_at; // дата создания
    public $update_at; // дата обновления
    public $type; // тип теста
}

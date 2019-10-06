<?php

namespace app\Core\Services;

class RatingService
{
    public function create($data)
    {

    }
    
    public function activate($data)
    {

    }
    
    public function deactivate($id)
    {

    }

    public function createAsk($data)
    {

    }
    
    public function removeAsk($id)
    {

    }

    public function load($id, $email)
    {
        // получение опросника
        // если опросник еще не закончился
        // проверяем, есть и переданый эмаил в опроснику
        // рандомно получаем 10 вопросов
        return null; // возвращаем опросник для этого пользователя
    }

    public function saveResult($email, $result)
    {
        // получение опросника
        // если опросник еще не закончился
        // проверяем, есть и переданый эмаил в опроснику
        // записываем результат прохождения опросника пользователем
    }
}

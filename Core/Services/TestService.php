<?php

namespace app\Core\Services;

class TestService
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
        // получение теста
        // если тест еще не закончился
        // проверяем, есть и переданый эмаил в тесте
        // рандомно получаем 10 вопросов
        return null; // возвращаем тест для этого пользователя
    }

    public function saveResult($email, $result)
    {
        // получение теста
        // если тест еще не закончился
        // проверяем, есть и переданый эмаил в тесте
        // записываем результат прохождения теста пользователем
    }
}

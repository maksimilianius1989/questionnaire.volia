<?php

namespace app\Core\Services;

use app\Core\Helpers\AccessHelper;

class AccessService
{
    public function compareToken($token, $email)
    {
        $myToken = AccessHelper::generateAccessToken($email);
        return $token === $myToken;
    }
}

<?php

namespace app\Core\Helpers;

class AccessHelper
{
    const SOLE = "6F^D(ffsf9FD@!&&";

    public static function generateAccessToken($email)
    {
        return md5(self::SOLE . $email . date('d-m-Y'));
    }
}

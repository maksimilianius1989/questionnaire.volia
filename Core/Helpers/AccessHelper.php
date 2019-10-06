<?php

namespace app\Core\Helpers;

class AccessHelper
{
    const SOLE = "6F^D(ffsf9FD@!&&";

    public static function generateTestToken($email, $username, $testId, $testType)
    {
        return md5(md5(self::SOLE . $email . $username . $testId . $testType));
    }

    public static function generateAdminToken($email, $username, $userRole)
    {
        return md5(md5(self::SOLE . $email . $username . $userRole . date('d-m-Y')));
    }
}

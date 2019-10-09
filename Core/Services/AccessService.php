<?php

namespace app\Core\Services;

use app\Core\Entities\Test;
use app\Core\Helpers\AccessHelper;

class AccessService
{
    public function accessToTest(
        $token,
        $serverHost,
        $email,
        $userName,
        $testType,
        $testId
    ) {
        $generatedToken = AccessHelper::generateTestToken(
            $serverHost,
            $email,
            $userName,
            $testType,
            $testId
        );

        return $token === $generatedToken;
    }

    public function accessToAdmin(
        $token,
        $email,
        $username,
        $userRole)
    {
        $generatedToken = AccessHelper::generateAdminToken($email, $username, $userRole);

        return $token === $generatedToken;
    }
}

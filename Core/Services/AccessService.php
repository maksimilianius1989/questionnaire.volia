<?php

namespace app\Core\Services;

use app\Core\Entities\Test;
use app\Core\Helpers\AccessHelper;

class AccessService
{
    public function accessToTest(
        $token,
        $email,
        $username,
        $testId,
        $testType
    ) {
        $generatedToken = AccessHelper::generateTestToken(
            $email,
            $username,
            $testId,
            $testType
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

<?php

namespace app\Core\Services;

use app\Core\Entities\Test;
use app\Core\Helpers\AccessHelper;

class AccessService
{
    public function accessToTest($token, $email, $testHash)
    {
        $myToken = AccessHelper::generateAccessToken($email);

        return $token === $myToken &&
                $this->isValidTest($testHash, $email);
    }
    
    private function isValidTest($testHash, $email)
    {
        $findTest = $this->findTest($testHash);

        return !empty($findTest)&&
            $findTest->isStart() &&
            $findTest->isFindUser($email);
    }
    
    private function findTest($testHash)
    {
        if ($testHash == '098f6bcd4621d373cade4e832627b4f6') {
            return Test::initialization();
        }

        return false;
    }
}

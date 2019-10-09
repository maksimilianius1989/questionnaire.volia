<?php

namespace app\Core\Helpers;

class AccessHelper
{
    const SOLE = "6F^D(ffsf9FD@!&&";

    /**
     * test test: 9d33f1830fa31e3595ee057ecf4d22c2
     * url api: http://questionnaire.volia.loc/api/v1/test/1?token=62377d304955ee7d864210a863858ade&email=taras@ivanov.com&user_name=%D0%A2%D0%B0%D1%80%D0%B0%D1%81%20%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2&server_host=http://questionnaire.volia.loc/api/v1
     * url front: http://localhost:8080/?token=62377d304955ee7d864210a863858ade&email=taras@ivanov.com&user_name=%D0%A2%D0%B0%D1%80%D0%B0%D1%81%20%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2&server_host=http://questionnaire.volia.loc/api/v1&type=test&test_id=1
     *
     * rating rating: 779c802fa397b0e146363d67e324286c
     * url api: http://questionnaire.volia.loc/api/v1/rating/1?token=eb0bf1a53551988b733e772b792a40fd&email=ivan@tarasov.com&user_name=%D0%98%D0%B2%D0%B0%D0%BD%20%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%BE%D0%B2&server_host=http://questionnaire.volia.loc/api/v1
     * url front: http://questionnaire.volia.loc/api/v1/rating/1?token=eb0bf1a53551988b733e772b792a40fd&email=ivan@tarasov.com&user_name=%D0%98%D0%B2%D0%B0%D0%BD%20%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%BE%D0%B2&server_host=http://questionnaire.volia.loc/api/v1
     */

    public static function generateTestToken(
        $serverHost,
        $email,
        $userName,
        $testType,
        $testId
    ) {
        return md5(md5(self::SOLE . $serverHost . $email . $userName . $testId . $testType));
    }

    public static function generateAdminToken($email, $username, $userRole)
    {
        return md5(md5(self::SOLE . $email . $username . $userRole . date('d-m-Y')));
    }
}

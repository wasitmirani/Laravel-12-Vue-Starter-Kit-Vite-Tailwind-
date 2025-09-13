<?php

namespace App\Services;

use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingService
{

    public function __construct(protected SettingRepositoryInterface $settingRepository) {

    }

    public function getListOptions(){
     
        return $this->settingRepository->getListOptions();
    }
}

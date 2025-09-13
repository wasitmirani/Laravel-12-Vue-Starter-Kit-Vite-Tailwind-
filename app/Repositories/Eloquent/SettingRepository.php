<?php

namespace App\Repositories\Eloquent;


use App\Utils\HelperComponent;
use App\Repositories\BaseRepository;
use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingRepository extends BaseRepository implements SettingRepositoryInterface
{
    public function __construct()
    {
        // parent::__construct($model);
    }

    public function getListOptions()
    {
     
        $countries = app(HelperComponent::class)->getCountriesList();


        return ['countries'=>$countries];
    }

}
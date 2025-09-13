<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    protected $model;

    public function __construct(Model $model)
    {

        $this->model = $model;
    }


    public function find($uuid)
    {
        return $this->model->where('uuid',$uuid)->first();
    }
    public function findBY($uuidOrEmail)
    {
    
        return $this->model->where(function($query) use ($uuidOrEmail) {
            $query->where('uuid', $uuidOrEmail)
                  ->orWhere('email', $uuidOrEmail);
        })->first();
    }


    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($uuid, array $data)
    {
        $model = $this->model->where('uuid',$uuid);
        if ($model) {
            $model->update($data);
            return $model;
        }
        return null;
    }

    public function delete($uuid)
    {

        return $this->model->where('uuid',$uuid)->delete();
    }

}

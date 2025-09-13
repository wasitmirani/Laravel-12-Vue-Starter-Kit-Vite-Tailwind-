<?php


namespace App\Repositories\Contracts;

interface UserRepositoryInterface
{
    public function all(bool $is_paginate);

    public function store(array $data);

    public function update($id,array $data);

    public function delete($id);

    public function find($id);
    public function findByUUIDOrEmail($id);
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceHistory extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected function casts(): array
    {
        return [
            'device_information' => 'array',
        ];
    }
}

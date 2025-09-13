<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeZone extends Model
{
    use HasFactory;
    protected $tabel = "time_zones";

    public function getAllTimeZones()
    {
        return self::orderBy('gmt_offset')->get();
    }
}

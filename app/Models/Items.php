<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    //
//    protected $guarded = [];

    protected $fillable = [
        'name', 'price'
    ];

}
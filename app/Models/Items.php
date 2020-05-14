<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    //
//    protected $guarded = [];

    protected $fillable = [
        'name', 'description', 'url-img', 'category', 'price',
    ];

}

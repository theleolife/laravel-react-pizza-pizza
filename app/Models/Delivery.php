<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    //
    //
//    protected $table = 'Delivery';
    protected $guarded = [];

//    protected $fillable = [
//        'type', 'cost'
//    ];

    public function delivery()
    {
        return $this->belongsTo(Delivery::class, 'delivery_id' );
    }
}

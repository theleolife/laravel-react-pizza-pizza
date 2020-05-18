<?php

namespace App;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //
    protected $guarded = [];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function cartItems()
    {
        return $this->hasMany(Cart::class, 'order_id');
    }

}

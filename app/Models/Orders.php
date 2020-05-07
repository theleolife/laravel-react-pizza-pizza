<?php

namespace App;

use App\Models\Cart;
use App\Models\Delivery;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //
    protected $guarded = [];
//    protected $fillable = [
//        'orderNumber','user_id','firstName','lastName','address','city','country','postCode','phoneNumber','priceTotal', 'delivery_id'
//    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function cartItems()
    {
        return $this->hasOne(Cart::class, 'order_id', 'id');
    }

}

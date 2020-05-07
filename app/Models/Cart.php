<?php

namespace App\Models;

use App\Orders;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
//    protected $guarded = [];

        protected $fillable = [
            'items_id','orders_id', 'quantity'
        ];

    public function order()
    {
        return $this->belongsTo(Orders::class, 'order_id', 'id');
    }

    public function itemsOrder()
    {
        return $this->belongsTo(Items::class, 'items_id', 'id');
    }
}

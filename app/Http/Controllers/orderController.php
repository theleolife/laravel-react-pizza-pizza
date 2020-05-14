<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Delivery;
use App\Models\Items;
use App\Models\Menu;
use App\Orders;
use App\User;
use Illuminate\Http\Request;

class orderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Orders::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


       $createOrder  = Orders::create([
             'orderNumber'      =>  'NUMBER-'.strtoupper(uniqid()),
             'user_id'           =>  $request['user_id'],
             'name'              =>  $request->input('name'),
             'email'                =>  $request->input('email'),
             'address'           =>  $request->input('address'),
             'city'              =>  $request->input('city'),
             'country'           =>  $request->input('country'),
             'postCode'          =>  $request->input('postCode'),
             'phoneNumber'       =>  $request->input('phoneNumber'),
             'delivery_id'   =>  $request->input('delivery_id'),
             'priceTotal'   =>  $request->input('priceTotal'),
       ]);

        if ($createOrder) {


            $data = $request->input('items');
//            $dataQtd = $request->input('qtd');

             $items = explode(',', $data);
//             $qtd = explode(',', $dataQtd);

            foreach ($items as $index => $item)
            {

                $dataItem = Items::where('id', $item)->first();

                $orderItem = new Cart([
                        'order_id'    => $createOrder->id,
                        'items_id'     =>   $dataItem->id,
                        'quantity'    =>  $request->input('quantity'),
                    ]);

//              echo $orderItem;

                $createOrder->cartItems()->save($orderItem);
            }

        }

        return $createOrder;
    }

    public function show($id)
    {
        //
        return Orders::findOrFail($id);

    }

    public function cart()
    {

        $cart = Cart::with('itemsOrder','Order')->get();

        return response()->json($cart, 200);
//        return Cart::with(itemsOrder)->get();

    }


}

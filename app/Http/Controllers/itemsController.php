<?php

namespace App\Http\Controllers;

use App\Models\Items;
use Illuminate\Http\Request;

class itemsController extends Controller
{

    public function index()
    {
        //
        return Items::all();
    }


    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

}

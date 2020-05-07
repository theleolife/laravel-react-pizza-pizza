<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public $successStatus = 200;


    public function __construct()
    {
        $this->middleware('auth');
    }

    public function user(Request $request)
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
}

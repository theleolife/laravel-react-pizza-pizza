<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class authController extends Controller
{

    public function register (Request $request) {
        $authData = $request->validate([
            'name'=> 'required|max:60',
            'email'=> 'email|required|unique:users',
            'password' => 'required',
        ]);
        $authData['password'] = bcrypt($authData['password']);

       $user = User::create($authData);

       $accessToken = $user->createToken('authToken')->accessToken;

       return response(['user'=> $user, 'accessToken'=>  $accessToken]);
    }

    public function login (Request $request){

        $login = $request->validate([
            'email'=> 'email|required',
            'password' => 'required',
        ]);

        if(!auth()->attempt($login)){
            return response(['message' => 'Invalid Login']);
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['user'=> auth()->user(), 'accessToken'=>  $accessToken]);
    }

}

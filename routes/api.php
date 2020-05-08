<?php

//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::apiResource('/orders', 'orderController');
Route::get('/myOrders', 'orderController@cart');

Route::apiResource('/delivery', 'deliveryController');
Route::apiResource('/items', 'itemsController');

//Register
Route::post('/register', 'authController@register');
//Login
Route::post('/login', 'authController@login');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('/user', 'UserController@user');
});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    Route::post('/user', 'authController@user');
//});

//Route::get('/user', ['middleware' => 'auth', function (Request $request) {
//    //
//    return $request->user();
//}]);

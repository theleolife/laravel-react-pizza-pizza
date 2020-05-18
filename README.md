THIS IS A SMALL ORDER PIZZA TEST LARAVEL + REACT DEPLOYED ON HEROKU 

What's included

    ReactJs as front-end inside Laravel framework

    Simple api back-end php laravel
    |        | GET|HEAD                               | api/delivery                            | delivery.index                    | App\Http\Controllers\deliveryController@index                             | api               |
    |        | GET|HEAD                               | api/delivery/{delivery}                 | delivery.show                     | App\Http\Controllers\deliveryController@show                              | api               |
    |        | GET|HEAD                               | api/items                               | items.index                       | App\Http\Controllers\itemsController@index                                | api               |
    |        | POST                                   | api/login                               |                                   | App\Http\Controllers\authController@login                                 | api               |
    |        | GET|HEAD                               | api/myOrders                            |                                   | App\Http\Controllers\orderController@cart                                 | api               |
    |        | GET|HEAD                               | api/order                               |                                   | App\Http\Controllers\orderController@order                                | api               |
    |        | GET|HEAD                               | api/orders                              | orders.index                      | App\Http\Controllers\orderController@index                                | api               |
    |        | POST                                   | api/orders                              | orders.store                      | App\Http\Controllers\orderController@store                                | api               |
    |        | GET|HEAD                               | api/orders/{order}                      | orders.show                       | App\Http\Controllers\orderController@show                                 | api               |
    |        | POST                                   | api/register                            |                                   | App\Http\Controllers\authController@register                              | api               |
    |        | POST                                   | api/user                                |                                   | App\Http\Controllers\UserController@user                                  | api,auth:api,auth |

    Login and registration added.
    Order pizza without login or register.
    Check orders, only if you create an account before to order.
    No payment method is included.
   
How to deploy heroku

1 - create a app heroku and connect github account or use git heroku, then deploy it to heroku.

2 - setup database plugin heroku free mysql

3 - setup laravel .env information on app dashboard

2 - imports tables and seeds laravel

    php artisan migrate &&
    php artisan db:seed &&
    php artisan passport:install     
    php artisan config:clear 
    composer dump-auto
   
3 - setup ENV infor and new laravel APP_KEY

    heroku config:set APP_KEY=$(php artisan --no-ansi key:generate --show) -a pizza-order-react-laravel (YOUR APP NAME)

4  -  DONE ENJOY

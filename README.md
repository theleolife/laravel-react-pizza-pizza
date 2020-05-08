How to

1 - imports tables and data

    php artisan config:clear 
    php artisan migrate &&
    php artisan db:seed &&
    php artisan passport:install     
    
    heroku config:set APP_DEBUG=true   -a  pizza-order-react-laravel
    heroku config:set APP_KEY=$(php artisan --no-ansi key:generate --show) -a app name

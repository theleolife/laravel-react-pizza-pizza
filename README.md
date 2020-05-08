THIS IS A SMALL ORDER PIZZA TEST LARAVEL + REACT DEPLOYED ON HEROKU 

How to deploy heroku

1 - create a app heroku and connect github account or use git heroku, then deploy it to heroku.

2 - setup database plugin heroku free mysql

3 - setup laravel .env information on app dashboard

2 - imports tables and seeds laravel

    php artisan migrate &&
    php artisan db:seed &&
    php artisan passport:install     
    php artisan config:clear 
    composer dumb-autoload
   
3 - may you need to setup new laravel APP_KEY

    heroku config:set APP_KEY=$(php artisan --no-ansi key:generate --show) -a pizza-order-react-laravel (YOUR APP NAME)

4  -  DONE ENJOY

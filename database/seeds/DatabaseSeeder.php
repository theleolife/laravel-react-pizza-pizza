<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert(array(
            array(
                'name' => 'Pizza Margarita',
                'price' => '5',
            ),
            array(
                'name' => 'Pizza Pepperoni',
                'price' => '7',
            ),
            array(
                'name' => 'Pizza Mussarela',
                'price' => '10',
            ),
            array(
                'name' => 'Pizza Vegan',
                'price' => '7',
            ),
            array(
                'name' => 'Pizza Quattro Formaggi',
                'price' => '12',
            ),
            array(
                'name' => 'Pizza Sweet Pizza',
                'price' => '15',
            ),
            array(
                'name' => 'Pizza Carbonara',
                'price' => '20',
            ),
            array(
                'name' => 'Pizza Picante',
                'price' => '13',
            ),
            array(
                'name' => 'Coke',
                'price' => '2',
            ),
            array(
                'name' => 'Soda',
                'price' => '2',
            ),
            array(
                'name' => 'Juice',
                'price' => '3',
            ),
        ));

        DB::table('deliveries')->insert(array(
            array(
                'type' => 'Basic',
                'cost' => '2',
            ),
            array(
                'type' => 'Fastest',
                'cost' => '5',
                ),
        ));

    }
}

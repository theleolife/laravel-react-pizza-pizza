<?php

use Illuminate\Database\Seeder;

class menuList extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('menu_items')->insert(array(
            array(
                'pizza' => 'Margarita',
                'price' => '5',
            ),
            array(
                'pizza' => 'Pepperoni',
                'price' => '7',
            ),
            array(
                'pizza' => 'Mussarela',
                'price' => '10',
            ),
            array(
                'pizza' => 'Vegan',
                'price' => '7',
            ),
            array(
                'pizza' => 'Quattro Formaggi',
                'price' => '12',
            ),
            array(
                'pizza' => 'Sweet Pizza',
                'price' => '15',
            ),
            array(
                'pizza' => 'Carbonara',
                'price' => '20',
            ),
            array(
                'pizza' => 'Picante',
                'price' => '13,50',
            ),
        ));
    }

}

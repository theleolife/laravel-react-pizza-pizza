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
                'name' => 'Pizza Marguerita',
                'description' => 'Tomatoes, white mozzarella cheese, and green basil.',
                'img' => '/images/marguerita.jpg',
                'category' => 'pizza',
                'price' => '7',
            ),
            array(
                'name' => 'Pizza Romana',
                'description' => 'Mozzarella, anchovies, capers, chopped basil, and pecorino.',
                'img' => '/images/romana.jpg',
                'category' => 'pizza',
                'price' => '13',
            ),
            array(
                'name' => 'Pizza Napoletana',
                'description' => 'Tomato sauce flavored with garlic and oregano, tomatoes, mozzarella, basil leaves.',
                'img' => '/images/napolitana.jpg',
                'category' => 'pizza',
                'price' => '11',
            ),
            array(
                'name' => 'Pizza Vegetariana',
                'description' => 'Tomato sauce, mozzarella and zucchini, eggplants, peppers.',
                'img' => '/images/vegetariana.jpg',
                'category' => 'pizza',
                'price' => '16',
            ),
            array(
                'name' => 'Pizza Quattro Formaggi',
                'description' => 'Mozzarella, parmesan, gorgonzola, provolone.',
                'img' => '/images/quattro-formaggi.jpg',
                'category' => 'pizza',
                'price' => '12',
            ),
            array(
                'name' => 'Pizza Prosciutto',
                'description' => 'Olive oil, oregano, garnished with fresh basil leaves.',
                'img' => '/images/prosciulto.jpg',
                'category' => 'pizza',
                'price' => '14',
            ),
            array(
                'name' => 'Pizza Quattro stagioni',
                'description' => 'Tomatoes, mozzarella, mushrooms, artichokes, ham, and olives.',
                'img' => '/images/quattro-stagioni.jpg',
                'category' => 'pizza',
                'price' => '15',
            ),
            array(
                'name' => 'Pizza Mozzarella',
                'description' => 'Traditional pizza with white mozzarella cheese, and olive.',
                'img' => '/images/mozzarella.jpg',
                'category' => 'pizza',
                'price' => '7',
            ),
            array(
                'name' => 'Coke',
                'description' => 'Traditional Coke',
                'img' => '/images/coke.jpg',
                'category' => 'drink',
                'price' => '3',
            ),
            array(
                'name' => 'Water',
                'description' => 'Sparkling water',
                'img' => '/images/water.jpg',
                'category' => 'drink',
                'price' => '1',
            ),
            array(
                'name' => 'Juice',
                'description' => 'Orange juice',
                'img' => '/images/juice.jpg',
                'category' => 'drink',
                'price' => '3',
            ),
            array(
                'name' => 'Beer',
                'description' => 'Beer',
                'img' => '/images/beer.jpg',
                'category' => '/drink',
                'price' => '2',
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

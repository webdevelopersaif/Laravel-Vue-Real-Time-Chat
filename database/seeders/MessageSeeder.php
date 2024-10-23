<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Insert sample messages
         DB::table('messages')->insert([
            [
                'message' => 'Hello, how are you?',
                'user_id' => 1, // Assuming user_id 1 exists
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'message' => 'I am fine, thank you!',
                'user_id' => 2, // Assuming user_id 2 exists
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'message' => 'What about the project update?',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'message' => 'I will send it by the end of the day.',
                'user_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more messages as needed
        ]);
    }
}

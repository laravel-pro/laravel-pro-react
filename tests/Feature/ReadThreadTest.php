<?php

namespace Tests\Feature;

use App\Thread;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReadThreadTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function api应该能返回帖子列表()
    {
        $this->withoutExceptionHandling();

        $author = factory(User::class)->create([
            'name' => 'Mr. Strange'
        ]);

        $thread = factory(Thread::class)->create([
            'author_id' => $author->id,
            'title' => 'foo thread',
            'created_at' => '2020-03-25T11:00:00.000000Z',
        ]);

        $response = $this->getJson('/api/threads');
        $response->assertJson([[
            'id' => $thread->id,
            'title' => 'foo thread',
            'author' => [
                'id' => $author->id,
                'name' => 'Mr. Strange',
            ],
            'created_at' => '2020-03-25T11:00:00.000000Z',
        ]]);
    }
}

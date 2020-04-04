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
        $response = $this->getJson('/api/threads');

        $response->assertJson([[
            'id' => $this->thread->id,
            'title' => 'foo thread',
            'author' => [
                'id' => $this->author->id,
                'name' => 'Mr. Strange',
            ],
            'created_at' => '2020-03-25T11:00:00.000000Z',
        ]]);
    }

    /** @test */
    public function api应该能返回帖子详情()
    {
        $response = $this->getJson("/api/threads/{$this->thread->id}");

        $response->assertJson([
            'id' => $this->thread->id,
            'title' => 'foo thread',
            'body' => '## thread body\n',
            'author' => [
                'id' => $this->author->id,
                'name' => 'Mr. Strange',
            ],
            'created_at' => '2020-03-25T11:00:00.000000Z',
        ]);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutExceptionHandling();

        $this->author = factory(User::class)->create([
            'name' => 'Mr. Strange'
        ]);

        $this->thread = factory(Thread::class)->create([
            'author_id' => $this->author->id,
            'title' => 'foo thread',
            'body' => '## thread body\n',
            'created_at' => '2020-03-25T11:00:00.000000Z',
        ]);
    }
}

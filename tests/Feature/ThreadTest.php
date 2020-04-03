<?php

namespace Tests\Feature;

use App\Thread;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ThreadTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function 一个帖子应该有一个作者()
    {
        $thread = factory(Thread::class)->create();

        $this->assertInstanceOf(User::class, $thread->author);
    }
}

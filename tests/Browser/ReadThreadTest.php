<?php

namespace Tests\Browser;

use App\Thread;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ReadThreadTest extends DuskTestCase
{
    use DatabaseMigrations;

    /** @test */
    public function 论坛应该可以查看帖子列表()
    {
        //假定我们有两个帖子
        factory(Thread::class)->create([
            'title' => 'bar thread'
        ]);
        //当我们访问论坛的时候
        $this->browse(function (Browser $browser) {
            $browser->visit('/threads')
                //我们应该能看到帖子的标题、作者、创建时间
                ->waitForText('foo thread')
                ->assertSee('Mr. Strange')
                ->assertSee('2020-03-25 16:00:00')
                ->assertSee('bar thread');
        });
    }

    /** @test */
    public function 论坛应该可以查看帖子详情()
    {

        $this->browse(function (Browser $browser) {
            $browser->visit("/threads/{$this->thread->id}")
                ->waitForText('foo thread')
                ->assertSee('Mr. Strange')
                ->assertSee('2020-03-25 16:00:00')
                ->assertSeeIn('h2', 'thread body');
        });
    }

    protected function setUp(): void
    {
        parent::setUp();

        $author = factory(User::class)->create([
            'name' => 'Mr. Strange'
        ]);
        $this->thread = factory(Thread::class)->create([
            'title' => 'foo thread',
            'created_at' => '2020-03-25T08:00:00.000000Z',
            'author_id' => $author->id,
            'body' => '## thread body'
        ]);
    }
}

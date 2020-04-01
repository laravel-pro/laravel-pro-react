<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /** @test */
    public function 网站应该能渲染React组件()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('React Component');
        });
    }
}

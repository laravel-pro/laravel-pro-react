<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class NavTest extends DuskTestCase
{
    /** @test */
    public function 网站的导航栏应该包括网站的名字()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSeeIn('nav', 'Laravel Pro');
        });
    }
}

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiRouteTest extends TestCase
{
    /** @test */
    public function 不存在的api应该返回404()
    {
        $this->getJson('/api/not-exists-api')
            ->assertNotFound();
    }
}

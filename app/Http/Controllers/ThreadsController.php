<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;

class ThreadsController extends Controller
{
    public function index()
    {
        return Thread::query()->with(['author'])->get();
    }

    public function show(Thread $thread)
    {
        return $thread->load('author');
    }
}

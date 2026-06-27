<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::get('/', function () { return redirect('/students'); });

Route::get('/students', [StudentController::class, 'index']);

Route::get('/students-list', [StudentController::class, 'getList']);

Route::post('/students', [StudentController::class, 'store']);

Route::get('/students/{student}', [StudentController::class, 'show']);

Route::put('/students/{student}', [StudentController::class, 'update']);

Route::delete('/students/{student}', [StudentController::class, 'destroy']);

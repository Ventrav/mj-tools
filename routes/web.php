<?php

use App\Http\Controllers\GameController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// GAME'S ROUTES
Route::controller(GameController::class)->group(function() {
    Route::post('/games', 'store');
    Route::get('/games/my', 'getMyGame');
});

Route::get('/', function () {
    Auth::loginUsingId(1);
    return view('index');
});

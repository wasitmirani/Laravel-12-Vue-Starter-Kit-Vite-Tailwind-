<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\frontend\FrontendController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

// });

require __DIR__.'/auth.php';

Route::get('/testapp',function(){
    return view('welcome');
});
Route::get('/logout',[AuthenticatedSessionController::class,'destroy']);
Route::get('/app', fn() => redirect('/app/dashboard'));

Route::get('/{path?}',[FrontendController::class, 'index']);
Route::get('/app/{module?}/{feature?}/{action?}/{id?}', [BackendController::class, 'index'])->name('backend.dashboard')->middleware(['auth', 'verified']);



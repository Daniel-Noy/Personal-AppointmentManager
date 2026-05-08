<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('auth/login', [LoginController::class, 'index'])->name('login');
    Route::post('auth/login', [LoginController::class, 'store'])->name('login.store');

    Route::get('auth/register', [RegisterController::class, 'index'])->name('register');
    Route::post('auth/register', [RegisterController::class, 'store'])->name('register.store');
});

Route::middleware('auth')->group(function () {
    Route::post('auth/logout', [LoginController::class, 'logout'])->name('logout');
});

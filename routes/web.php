<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

// Rutas de autenticación
require __DIR__.'/auth.php';

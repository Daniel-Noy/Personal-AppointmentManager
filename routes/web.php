<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'landing/pages/Index')->name('home');

// Rutas de autenticación
require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.admin')->group(function () {
    Route::get('/admin', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::inertia('/admin/productos-servicios', 'admin/pages/Products')->name('admin.products');
    Route::inertia('/admin/horario', 'admin/pages/Schedule')->name('admin.schedule');
    Route::inertia('/admin/citas-programadas', 'admin/pages/Appointments')->name('admin.appointments');
});
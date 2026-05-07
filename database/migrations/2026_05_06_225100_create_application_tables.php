<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Crea todas las tablas de la aplicación definidas en el Diagrama ER
     * que no son parte de la instalación base de Laravel.
     */
    public function up(): void
    {
        // --- Tablas de catálogo (sin dependencias) ---

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
        });

        Schema::create('service_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
        });

        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
        });

        Schema::create('appointment_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
        });

        // --- Agregar role_id a users ---

        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')
                ->after('remember_token')
                ->constrained('roles');
        });

        // --- Tablas con dependencia a users ---

        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();
            $table->string('phone_number', 20)->nullable();
            $table->string('profile_photo_url')->nullable();
            $table->timestamps();
        });

        // --- Tablas de negocio ---

        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->decimal('price', 10, 2);
            $table->integer('duration_minutes');
            $table->text('description')->nullable();
            $table->string('image_url', 255)->nullable();
            $table->boolean('is_visible')->default(true);
            $table->foreignId('service_category_id')
                ->constrained('service_categories');
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->decimal('price', 10, 2);
            $table->text('description')->nullable();
            $table->string('image_url', 255)->nullable();
            $table->boolean('is_visible')->default(true);
            $table->foreignId('product_category_id')
                ->constrained('product_categories');
        });

        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->timestamp('scheduled_at');
            $table->string('cancellation_reason', 500)->nullable();
            $table->foreignId('user_id')
                ->constrained('users');
            $table->foreignId('status_id')
                ->constrained('appointment_statuses');
            $table->timestamps();
        });

        // --- Tablas intermedias (Many-to-Many) ---

        Schema::create('appointment_service', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_id')
                ->constrained('appointments')
                ->cascadeOnDelete();
            $table->foreignId('service_id')
                ->constrained('services');
            $table->integer('amount');
            $table->timestamps();
        });

        Schema::create('appointment_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_id')
                ->constrained('appointments')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->constrained('products');
            $table->integer('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Orden inverso para respetar foreign keys
        Schema::dropIfExists('appointment_product');
        Schema::dropIfExists('appointment_service');
        Schema::dropIfExists('appointments');
        Schema::dropIfExists('products');
        Schema::dropIfExists('services');
        Schema::dropIfExists('user_profiles');

        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });

        Schema::dropIfExists('appointment_statuses');
        Schema::dropIfExists('product_categories');
        Schema::dropIfExists('service_categories');
        Schema::dropIfExists('roles');
    }
};

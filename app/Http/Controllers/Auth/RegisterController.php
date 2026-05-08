<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Auth;
use Hash;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class RegisterController extends Controller
{
    public function index(): Response
    {
        return inertia()->render('auth/pages/Register');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);

        return redirect()->route('home');
    }
}

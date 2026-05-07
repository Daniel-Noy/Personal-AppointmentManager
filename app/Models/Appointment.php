<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['scheduled_at', 'cancellation_reason', 'user_id', 'status_id'])]
class Appointment extends Model
{
    protected $casts = [
        'scheduled_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(AppointmentStatus::class, 'status_id');
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class)->withPivot('amount')->withTimestamps();
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->withPivot('amount')->withTimestamps();
    }
}

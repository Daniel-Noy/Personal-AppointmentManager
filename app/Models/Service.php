<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['name', 'price', 'duration_minutes', 'description', 'image_url', 'is_visible', 'service_category_id'])]
class Service extends Model
{
    public function category(): BelongsTo
    {
        return $this->belongsTo(ServiceCategory::class, 'service_category_id');
    }

    public function appointments(): BelongsToMany
    {
        return $this->belongsToMany(Appointment::class)->withPivot('amount')->withTimestamps();
    }
}

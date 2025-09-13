<?php

namespace App\Traits;

use Illuminate\Support\Facades\Log;

trait LogsActivity
{
    /**
     * Log a custom activity message.
     *
     * @param string $message
     * @param array $context
     * @return void
     */
    public function logActivity(string $message, array $context = []): void
    {
        Log::info($message, $context);
    }

    /**
     * Log creation activity.
     *
     * @param mixed $model
     * @return void
     */
    protected static function bootLogsActivity(): void
    {
        static::created(function ($model) {
            $model->logActivity('Created: ' . class_basename($model), ['model' => $model->toArray()]);
        });

        static::updated(function ($model) {
            $model->logActivity('Updated: ' . class_basename($model), ['model' => $model->toArray()]);
        });

        static::deleted(function ($model) {
            $model->logActivity('Deleted: ' . class_basename($model), ['model' => $model->toArray()]);
        });
    }

    /**
     * Customize the message format for logging.
     *
     * @param string $event
     * @param mixed $model
     * @return string
     */
    protected function formatMessage(string $event, $model): string
    {
        return "{$event} a " . class_basename($model) . " with ID: {$model->id}";
    }
}

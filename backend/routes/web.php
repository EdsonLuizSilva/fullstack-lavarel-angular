<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/mensagens', function () {
    return response() -> json(
        [
            ['texto' => 'Helo world'],
            ['texto' => 'Mensagem']
        ]
    );
});

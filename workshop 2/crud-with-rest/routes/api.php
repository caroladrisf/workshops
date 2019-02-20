<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth.basic'])->group(function() {
// Route::middleware(['basicAuth'])->group(function() {
    Route::get('students', 'StudentController@index');
    Route::post('students', 'StudentController@create');
    Route::put('students/{id}', 'StudentController@update');
    Route::delete('students/{id}', 'StudentController@delete');
});

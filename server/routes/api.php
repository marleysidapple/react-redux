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

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
	$api->group(['namespace' => 'App\Http\Controllers\Api\V1'], function($api){ //start of group

		/*
		* register route
		* POST
		*/
	 	$api->post('auth/register', 'SignupController@create');


	 	/*
	 	* login route
	 	* POST
	 	*/
	 	$api->post('auth/login', 'SignupController@authenticate');

	 }); //end of group
});
<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\User;
use DB;

class SignupController extends Controller
{
    public function index(SignupRequest $request)
    {
    	DB::BeginTransaction();
    	try {
    		$user = User::create($request->all());
			DB::commit();
    	} catch (\Exception $e) {
    		   DB::rollback();
    		   return response()->json('something went wrong', 400);
    	}
    	return response()->json('status is ok', 200);
    }
}

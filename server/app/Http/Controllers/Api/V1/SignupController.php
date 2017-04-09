<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\User;
use DB;

class SignupController extends Controller
{
    public function create(SignupRequest $request)
    {
    	DB::BeginTransaction();
    	try {
    		$user = User::create(array(
    				'fullname'	=> $request->fullname,
    				'email'		=> $request->email,
    				'mobile'	=> $request->mobile,
    				'address'	=> $request->address,
    				'password'	=> \bcrypt($request->password)
    			));

    		//$user = User::create($request->all());
			DB::commit();
    	} catch (\Exception $e) {
    		   DB::rollback();
    		   return response()->json('something went wrong', 400);
    	}
    	return response()->json('user registered successfully', 200);
    }
}

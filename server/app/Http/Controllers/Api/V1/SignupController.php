<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;

class SignupController extends Controller
{
    public function index(SignupRequest $request)
    {
    	
    	return response()->json('status is ok', 200);
    }
}

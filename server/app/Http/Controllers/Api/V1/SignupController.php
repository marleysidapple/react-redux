<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\User;
use DB;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class SignupController extends Controller
{
    public function create(SignupRequest $request)
    {
        DB::BeginTransaction();
        try {
            $user = User::create(array(
                'fullname' => $request->fullname,
                'email'    => $request->email,
                'mobile'   => $request->mobile,
                'address'  => $request->address,
                'password' => \bcrypt($request->password),
            ));

            //$user = User::create($request->all());
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error'=>'something went wrong'], 401);
        }
        return response()->json(['success' => 'user registered successfully'], 200);
    }

    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return response()->json(compact('token'));
    }

}

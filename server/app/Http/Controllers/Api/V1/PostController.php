<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Post;
use DB;

class PostController extends Controller
{
    /**
     * List of posts
     * @param int $id
     * @return Post
     */
    public function index($id = null)
    {
        $post = $id != "" ? Post::find($id) : Post::all();
        return response()->json($post, 200);
    }

    /**
     *  @param  array  $data
     *  @return Post
     */

    public function store(PostRequest $request)
    {
        DB::BeginTransaction();
        try {
            $post = Post::create(array(
                'author'      => $request->author,
                'title'       => $request->title,
                'description' => $request->description,
                'posted_date' => date('Y-m-d'),
                'keyword'     => $request->keyword,
            ));
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['error' => 'something went wrong'], 401);
        }
        return response()->json(['post' => $post], 200);
    }

   

    public function update()
    {

    }

    public function destroy()
    {

    }

}

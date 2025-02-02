<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Events\MessageSent;

class ChatsController extends Controller
{
    //Add the below functions
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('chat');
    }

    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        // Validate the input
        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $user = Auth::user();
        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);
        //broadcast(new MessageSent($user, $message))->toOthers();
        // return ['status' => 'Message Sent!'];
        return response()->json($message, 201); // Return response for frontend
    }
}

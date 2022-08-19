<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function store(Request $req) {
        Game::create([
            "name" => $req->name,
            "owner" => Auth::user()->id
        ]);

        return response()->json("Game added", 201);
    }
}

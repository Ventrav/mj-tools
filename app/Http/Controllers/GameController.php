<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function store(Request $req) {
        $game = Game::create([
            "name" => $req->name,
            "owner" => Auth::user()->id
        ]);

        return response()->json($game, 201);
    }

    public function getMyGame() {
        $games = Game::where("owner", Auth::user()->id)->get();

        return response()->json($games, 200);
    }
}
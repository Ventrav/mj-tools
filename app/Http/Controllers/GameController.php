<?php

namespace App\Http\Controllers;

use App\Models\CharacterSheet;
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
        $games = Game::where("owner", Auth::user()->id)->with("character_sheet")->get();

        return response()->json($games, 200);
    }

    public function createCharacterSheet($id) {
        CharacterSheet::create([
            "game_id" => $id
        ]);

        $game = Game::with("character_sheet")->find($id);

        return response()->json($game,201);
    }
}
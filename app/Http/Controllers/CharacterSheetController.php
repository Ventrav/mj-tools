<?php

namespace App\Http\Controllers;

use App\Models\CharacterSheet;
use Illuminate\Http\Request;

class CharacterSheetController extends Controller
{
    public function get($id) {
        $cs = CharacterSheet::findOrFail($id);

        return response()->json($cs);
    }
}

<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\Grupo;
use Illuminate\Http\Request;

class GrupoController extends Controller
{
    function exibirGrupos(){
        $grupos = Grupo::exibirGruposModel();
        return $grupos->toArray();
    }

    function exibirGruposId($id){
        $grupo = Grupo::find($id);
        return $grupo->toArray();
    }
    
}

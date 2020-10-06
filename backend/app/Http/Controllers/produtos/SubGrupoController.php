<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\SubGrupo;
use Illuminate\Http\Request;

class SubGrupoController extends Controller
{
    function exibirSubGrupos($id){
        $subGrupo = SubGrupo::exibirSubgrupoModel($id);
        return $subGrupo->toArray();
        // $subgrupo = SubGrupo::find($id);
        // return $subgrupo->toArray();
    }

    function exibirSubGruposId($id){
        $subGrupo = SubGrupo::exibirSubgrupoModelId($id);
        return $subGrupo->toArray();
        // $subgrupo = SubGrupo::find($id);
        // return $subgrupo->toArray();
    }



}

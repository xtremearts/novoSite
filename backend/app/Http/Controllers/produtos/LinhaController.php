<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\Linha;
use Illuminate\Http\Request;

class LinhaController extends Controller
{
    function exibirLinhas(){
        $linhas = Linha::exibirLinhasModel();
        return $linhas->toArray();
    }

    function exibirLinhasId($id){
        $linha = Linha::find($id);
        return $linha->toArray();
    }
}
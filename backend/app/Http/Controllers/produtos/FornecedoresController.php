<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\Fornecedores;
use Illuminate\Http\Request;

class FornecedoresController extends Controller
{
    function exibirFornecedores(){
        $data = Fornecedores::all();
        return $data->toArray();
    }

    function exibirFornecedoresId($id){
        $data = Fornecedores::find($id);
        return $data->toArray();
    }
}

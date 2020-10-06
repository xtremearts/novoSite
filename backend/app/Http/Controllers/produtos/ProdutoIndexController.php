<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\ProdutosIndex;
use Illuminate\Http\Request;

class ProdutoIndexController extends Controller
{
    function exibirProdutosIndex(){
        $data = ProdutosIndex::exibirProdutosIndexModel();
        return $data->toArray();
    }
}

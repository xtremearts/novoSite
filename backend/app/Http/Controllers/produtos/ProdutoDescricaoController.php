<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\ProdutoDescricao;
use Illuminate\Http\Request;

class ProdutoDescricaoController extends Controller
{
    function exibirProdutosDescricao(){
        $data = ProdutoDescricao::exibirProdutosDescricaoModel();
        return $data->toArray();
    }

    function exibirProdutosDescricaoID($id){
        $data = ProdutoDescricao::exibirProdutosDescricaoIdModel($id);
        return $data->toArray();
    }

    function exibirProdutoDescricaoIndexId($id){
        $data = ProdutoDescricao::exibirProdutoDescricaoIndexIdModel($id);
        return $data->toArray();
    }


    function criarProdutoDescricao(Request $request){
        $produto = new ProdutoDescricao();

        $produto->descricao = $request->descricao;
        $produto->cod_nome = $request->cod_nome;
        $produto->cod_nc = $request->cod_nc;


        $produto->save();

        return ['retorno' => 'OK'];

    }
}

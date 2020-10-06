<?php

namespace App\Http\Controllers\produtos;

use App\Http\Controllers\Controller;
use App\models\ProdutosNome;
use Illuminate\Http\Request;

class ProdutoNomeController extends Controller
{
    function exibirProdutosNomeId($id){
        $produtosNome = ProdutosNome::exibirProdutosNomeModelId($id);
        return $produtosNome->toArray();
    }

    function exibirProdutosNome(){
        $produtosNomes = ProdutosNome::exibirProdutosNomeModel();
        return $produtosNomes->toArray();
    }

    function exibirProdutosNomeGrupoId($id){
        $produtosNomeGrupoId = ProdutosNome::exibirProdutosNomeGrupoModelId($id);
        return $produtosNomeGrupoId->toArray();
    }

    function exibirProdutosNomeIndexId($id){
        $data = ProdutosNome::exibirProdutosNomeIndexId($id);
        return $data->toArray();
    }

    // ------------------------------------------------------



    function produtosPorFilial(Request $request, $id){
        $request->session()->put('filial', $id);
        // return $request;

        // $produtosNomes = ProdutosNome::exibirProdutosNomeModel();
        // return $produtosNomes->toArray();

        return session()->get('filial');

        
    }

    function recuperarSessaoFilial(){

        

        print session()->get('filial');
    }



    // ------------------------------------------------------



    function exibirProdutosNomeLancamentoIndex(){
        $data = ProdutosNome::exibirLancamentos(16);
        return $data ->toArray();
    }

    function exibirProdutosNomeLancamento(){
        $data = ProdutosNome::exibirLancamentos(100);
        return $data ->toArray();
    }
}
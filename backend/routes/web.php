<?php

use Illuminate\Support\Facades\Route;
header('Access-Control-Allow-Origin: http://localhost:4200');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// usei agrupamento de rotas para ficar mais organizado
Route::group(['prefix' => 'API'], function(){
    Route::get('produtosnome', 'produtos\ProdutoNomeController@exibirProdutosNome');
    Route::get('produtosnome/{id}', 'produtos\ProdutoNomeController@exibirProdutosNomeId');
    Route::get('produtosnomeindex/{id}', 'produtos\ProdutoNomeController@exibirProdutosNomeIndexId');
    Route::get('produtosnomegrupo/{id}', 'produtos\ProdutoNomeController@exibirProdutosNomeGrupoId');

    Route::get('produtosdescricao', 'produtos\ProdutoDescricaoController@exibirProdutosDescricao');
    Route::get('produtosdescricao/{id}', 'produtos\ProdutoDescricaoController@exibirProdutosDescricaoId');
    Route::get('produtosdescricaoindex/{id}', 'produtos\ProdutoDescricaoController@exibirProdutoDescricaoIndexId');

    Route::get('produtosindex', 'produtos\ProdutoIndexController@exibirProdutosIndex');

    Route::get('linhas', 'produtos\LinhaController@exibirLinhas');
    Route::get('linhas/{id}', 'produtos\LinhaController@exibirLinhasId');
    Route::get('grupos', 'produtos\GrupoController@exibirGrupos');
    Route::get('grupos/{id}', 'produtos\GrupoController@exibirGruposId');
    Route::get('subgruposgrupo/{id}', 'produtos\SubGrupoController@exibirSubGrupos');
    Route::get('subgrupos/{id}', 'produtos\SubGrupoController@exibirSubGruposId');

    Route::get('fornecedores', 'produtos\FornecedoresController@exibirFornecedores');
    Route::get('fornecedores/{id}', 'produtos\FornecedoresController@exibirFornecedoresId');
    Route::get('buscar/{buscar}', 'produtos\BuscarController@exibirBusca');

    Route::get('winthor-produtos/{id}', 'produtos\BuscarController@exibirApiTemporaria');

    Route::get('winthor-produtos-array/{produtos}', 'produtos/BuscarController@exibirApiTemporariaArray');

    Route::get('winthor-produtos-array', 'produtos/BuscarController@exibirApiTemporariaArray');

    Route::get('filial/{id}', 'produtos\ProdutoNomeController@produtosPorFilial');
    Route::get('exibirfilial', 'produtos\ProdutoNomeController@recuperarSessaoFilial');

    Route::get('lancamentos', 'produtos\ProdutoNomeController@exibirProdutosNomeLancamento');
    Route::get('lancamentos-index', 'produtos\ProdutoNomeController@exibirProdutosNomeLancamentoIndex');

    // Route::get('lancamentos-busca/{id}', 'produtos\BuscarController@exibirApiLancamentos');

    Route::get('lancamentos-busca-nome/{id}', 'produtos\BuscarController@exibirApiLancamentosNome');
    Route::get('lancamentos-busca/{id}', 'produtos\BuscarController@exibirApiLancamentos');


    Route::post('produto-descricao', 'produtos\ProdutoDescricaoController@criarProdutoDescricao');

});

Route::get('banco', 'produtos\LinhaController@exibirLinhas');

// Route::get('/milk', array('as' => 'milk', 'uses' => 'ProductsController@index(1)'));
// Route::get('/milk', array('data' =>  'ProductsController@index'));



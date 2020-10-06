<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProdutosNome extends Model
{
    protected $table = 'tb_nome';
    protected $primaryKey = 'cod_nome';

    // Tabelas----------------------------
    public static $tbNome = 'tb_nome';
    public static $tbDescricao = 'tb_descricao';
    public static $tbFornecedores = 'tb_fornecedores';
    public static $tbWinthorProduto = 'tb_w_produto';
    public static $tbWinthorProdutoFilial = 'tb_w_produto_filial';
    // ------------------------------------------------



    public static function exibirProdutosNomeModel(){
        $produtosNome = DB::table('tb_nome')
        ->select(DB::raw('cod_nome as id, nome, cod_fornecedor, cod_grupo, cod_subgrupo, ordenar, ordenar2, ordenar3'))
        ->get();
        return $produtosNome;
    }

    public static function exibirProdutosNomeModelId($id){
        $produtosNome = DB::table('tb_nome')
        ->select(DB::raw('cod_nome as id, nome, cod_fornecedor, cod_grupo, cod_subgrupo, ordenar, ordenar2, ordenar3'))
        ->where('cod_nome', $id)
        ->get();
        return $produtosNome;
    }

    public static function exibirProdutosNomeGrupoModelId($id) {
        $n   = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $f   = ProdutosNome::$tbFornecedores;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;

        $query = DB::table($n)
        ->distinct()
        ->leftJoin($f, $n.'.cod_fornecedor', '=' , $f.'.cod_fornecedor')
        ->leftJoin($d, $d.'.cod_nome', '=', $n.'.cod_nome')
        ->leftJoin($wpf, $wpf.'.codprod', '=' , $d.'.cod_nc')

        ->select(
            DB::raw('
                tb_nome.cod_nome as id,
                nome,
                cod_index,
                tb_nome.cod_fornecedor,
                fornecedor,
                cod_grupo,
                cod_subgrupo
                '
            )
        )
        ->where($n.'.cod_grupo', $id)
        ->where($wpf.'.proibidavenda', 'N')
        ->where($wpf.'.foralinha', 'N')

        ->where(function($query) use ($wpf){
            $query
            ->where($wpf.'.aparecer', 'S')
            ->orWhereNull($wpf.'.aparecer')
            ;
        })

        ->orderByRaw($n.'.nome')
        ->get();
        return $query;
    }


    public static function exibirProdutosNomeIndexId($id) {
        $n   = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $f   = ProdutosNome::$tbFornecedores;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;

        $query = DB::table($n)
        ->distinct()
        ->leftJoin($f, $n.'.cod_fornecedor', '=' , $f.'.cod_fornecedor')
        ->leftJoin($d, $d.'.cod_nome', '=', $n.'.cod_nome')
        ->leftJoin($wpf, $wpf.'.codprod', '=' , $d.'.cod_nc')

        ->select(
            DB::raw('
                tb_nome.cod_nome as id,
                nome,
                cod_index,
                tb_nome.cod_fornecedor,
                fornecedor,
                cod_grupo,
                cod_subgrupo
                '
            )
        )
        ->where($wpf.'.proibidavenda', 'N')
        ->where($wpf.'.foralinha', 'N')
        ->where($n.'.cod_index', $id)

        ->where(function($query) use ($wpf){
            $query
            ->where($wpf.'.aparecer', 'S')
            ->orWhereNull($wpf.'.aparecer');
        })

        ->orderByRaw($n.'.nome')
        ->limit(12)
        ->get();
        return $query;
    }


    
    public static function exibirLancamentos($limit){
        $n   = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $f   = ProdutosNome::$tbFornecedores;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;

        $query = DB::table($n)
        
        ->distinct()
        ->leftJoin($f, "$n.cod_fornecedor", "=" , "$f.cod_fornecedor")
        ->leftJoin($d, "$d.cod_nome", "=", "$n.cod_nome")
        ->leftJoin($wpf, "$wpf.codprod", "=" , "$d.cod_nc")

        ->select(
            DB::raw("
                $n.cod_nome as id,
                $n.nome,
                $n.cod_fornecedor,
                $f.fornecedor,
                $f.cod_fornecedor
                "
            )
        )
        ->where("$wpf.proibidavenda", "N")
        ->limit($limit)
        ->where("$wpf.foralinha", "N")
        ->orderByDesc("$n.cod_nome")
        ->get();

        return $query;

    }


}

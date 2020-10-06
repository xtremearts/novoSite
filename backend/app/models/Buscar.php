<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Buscar extends Model
{


    protected static $tbDescricao = 'tb_descricao';
    protected static $tbFornecedores = 'tb_fornecedores';
    protected static $tbWinthorProdutoFilial = 'tb_w_produto_filial';


    public static function exibirBuscaModel($buscar){
        // tabelas

        $n   = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $f   = ProdutosNome::$tbFornecedores;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;



        $data = DB::table($n)
        ->distinct()
        ->leftJoin($d, $d.'.cod_nome', '=', $n.'.cod_nome')
        ->leftJoin($f, $f.'.cod_fornecedor', '=', $n.'.cod_fornecedor')
        ->leftJoin($wpf, $wpf.'.codprod', '=' , $d.'.cod_nc')

        ->select(
            $n.'.cod_nome',
            $n.'.nome',
            $f.'.fornecedor',
            $f.'.cod_fornecedor',
            $n. '.cod_index'
            )

        // ->whereIn($d.'.cod_filial', [2, 4, 12])

        ->where($wpf.'.proibidavenda', 'N')
        ->where($wpf.'.foralinha', 'N')

        ->where(function($query) use ($wpf){
            $query
            ->where($wpf.'.aparecer', 'S')
            ->orWhereNull($wpf.'.aparecer')
            ;
        })

        ->where(function($query) use($n, $d, $f, $buscar) {
            $query
            ->orWhere($n.'.nome','like',"%$buscar%")
            ->orWhere($d.'.cod_nc','like',"%$buscar%")
            ->orWhere($d.'.descricao','like',"%$buscar%")
            ->orWhere($f.'.fornecedor','like',"%$buscar%");
        })
        ->orderBy($n.'.nome')
        ->get();
        return $data;
    }

    public static function apiTemporariaModel($id){
        $wp = 'tb_w_produto';
        $wpf = 'tb_w_produto_filial';

        $data = DB::table($wp)
        ->where($wp.'.codprod', '=', $id)
        ->where($wpf.'.codfilial', '=', '2')
        ->select(
            DB::raw(
                "
                $wpf.codfilial,
                $wp.codprod id,
                $wp.descricao,
                $wp.embalagem,
                $wp.codfab,
                $wp.unidade,
                rand(13) codauxiliar,
                rand(13) codauxiliar2,
                rand(13) codauxiliartrib,

                case
                    when $wp.obs = 'PV' then 'S'
                    else $wpf.proibidavenda
                end proibidavenda,

                case
                    when $wp.obs2 = 'FL' then 'S'
                    else $wpf.foralinha
                end foralinha,

                'S' revenda,
                $wpf.multiplo,
                'Informações técnicas' informacoestecnicas
                "
                )
            )
            ->leftJoin($wpf, $wpf. '.codprod', '=', $wp.'.codprod')
            ->get();

            return $data;
            ;
    }




    public static function apiTemporariaModelArray($produtos){
        $wp = 'tb_w_produto';
        $wpf = 'tb_w_produto_filial';

        $data = DB::table($wp)
        ->where($wpf.'.codfilial', '=', '2')
        ->whereIn($wp.'.codprod', [$produtos])
        ->select(
            DB::raw(
                "
                $wpf.codfilial,
                $wp.codprod id,
                $wp.descricao,
                $wp.embalagem,
                $wp.codfab,
                $wp.unidade,
                rand(13) codauxiliar,
                rand(13) codauxiliar2,
                rand(13) codauxiliartrib,

                case
                    when $wp.obs = 'PV' then 'S'
                    else $wpf.proibidavenda
                end proibidavenda,

                case
                    when $wp.obs2 = 'FL' then 'S'
                    else $wpf.foralinha
                end foralinha,

                'S' revenda,
                $wpf.multiplo,
                'Informações técnicas' informacoestecnicas
                "
                )
            )
            ->leftJoin($wpf, $wpf. '.codprod', '=', $wp.'.codprod')
            ->get();

            return $data;
            ;
    }


    public static function exibirProdutosLancamentosNome($id){
        $n = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $wp = ProdutosNome::$tbWinthorProduto;

        $data = DB::table($d)
        ->distinct()
        ->leftJoin($wp, "$wp.codprod", '=' , "$d.cod_nc")
        ->leftJoin($n, "$n.cod_nome", "=", "$d.cod_nome")
        ->select(DB::raw("
                            $n.nome,
                            $n.cod_nome,
                            $n.cod_fornecedor
                        "
                        ))
        ->whereIn("$d.cod_nc", $id)
        // ->whereRaw("$d.cod_nc in $id")
        ->orderByRaw("$n.nome")

        ->get();
        return $data;
    }



    public static function exibirProdutosLancamentos($id){
        $n = ProdutosNome::$tbNome;
        $d   = ProdutosNome::$tbDescricao;
        $wp = ProdutosNome::$tbWinthorProduto;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;

        $data = DB::table($d)
        ->distinct()
        ->leftJoin($wp, "$wp.codprod", '=' , "$d.cod_nc")
        ->leftJoin($n, "$n.cod_nome", "=", "$d.cod_nome")
        ->leftJoin($wpf,"$wpf.codprod", '=', "$wp.codprod")
        ->select(DB::raw("
                            $d.cod_nc as id,
                            $d.cod_nome,
                            $d.descricao,
                            $wp.embalagem,
                            $wpf.multiplo,
                            $wp.unidade,
                            
                            case
                                when $d.cod_nc_img is null or $d.cod_nc_img = '' then $d.cod_nome
                                else $d.cod_nc_img
                            end as cod_nc_img
                        "
                        ))
        ->whereIn("$d.cod_nc", $id)
        // ->whereRaw("$d.cod_nc in $id")
        // ->orderByRaw("$d.ordenar, $d.ordenar2, $d.ordenar3, $d.descricao")

        ->get();
        return $data;
    }
}

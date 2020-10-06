<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProdutoDescricao extends Model
{
    protected $table = 'tb_descricao';
    protected $primaryKey = 'cod_nc';

    public static function exibirProdutosDescricaoModel(){
        $d   = ProdutosNome::$tbDescricao;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;
        $wp = ProdutosNome::$tbWinthorProduto;

        $data = DB::table('tb_descricao')
        ->distinct()
        ->leftJoin($wpf, "$wpf.codprod", '=' , "$d.cod_nc")
        ->leftJoin($wp, "$wp.codprod", '=' , "$d.cod_nc")

        ->select(DB::raw("
            $d.cod_nc as id,
            $d.cod_nome,
            $d.descricao,
            $wp.codfab,
            $wpf.multiplo,
            $wp.embalagem,
            $wp.unidade,
            $d.cod_nc_img
            
            
        "))
        ->where("$wpf.proibidavenda", 'N')
        ->where("$wpf.foralinha", 'N')

        ->where(function($query) use ($wpf){
            $query
            ->where("$wpf.aparecer", 'S')
            ->orWhereNull("$wpf.aparecer")
            ;
        })
        ->orderByRaw("$d.ordenar, $d.ordenar2, $d.ordenar3, $d.descricao")
        ->get();
        return $data;
    }

    public static function exibirProdutosDescricaoIdModel($id){
        $d   = ProdutosNome::$tbDescricao;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;
        $wp = ProdutosNome::$tbWinthorProduto;

        $data = DB::table($d)
        ->distinct()
        ->leftJoin($wpf, "$wpf.codprod", '=' , "$d.cod_nc")
        ->leftJoin($wp, "$wp.codprod", '=' , "$d.cod_nc")
        ->select(DB::raw("
                            $d.cod_nc as id,
                            $d.cod_nome,
                            $d.descricao,
                            $wp.codfab,
                            $wpf.multiplo,
                            $wp.embalagem,
                            $wp.unidade,
                            case
                                when $d.cod_nc_img is null or $d.cod_nc_img = '' then $d.cod_nome
                                else $d.cod_nc_img
                            end as cod_nc_img,
                            $wp.ean,
                            $wp.ean2
                        "
                        ))
        ->where("$d.cod_nome", $id)
        ->where("$wpf.proibidavenda", 'N')
        ->where("$wpf.foralinha", 'N')

        ->where(function($query) use ($wpf){
            $query
            ->where("$wpf.aparecer", 'S')
            ->orWhereNull("$wpf.aparecer")
            ;
        })
        // ->orderByRaw("$d.ordenar, $d.ordenar2, $d.ordenar3, $d.descricao")
        ->get();
        return $data;
    }

    public static function exibirProdutoDescricaoIndexIdModel($id){
        $d   = ProdutosNome::$tbDescricao;
        $wpf = ProdutosNome::$tbWinthorProdutoFilial;

        $data = DB::table($d)
        ->distinct()
        ->leftJoin($wpf, "$wpf.codprod", '=' , "$d.cod_nc")
        ->select(DB::raw(" case
                                when $d.cod_nc_img is null or $d.cod_nc_img = '' then $d.cod_nome
                                else $d.cod_nc_img
                            end as cod_nc_img
                        "
                        ))
        ->where("$d.cod_nome", $id)
        ->where("$wpf.proibidavenda", 'N')
        ->where("$wpf.foralinha", 'N')
        ->where(function($query) use ($wpf){
            $query
            ->where("$wpf.aparecer", 'S')
            ->orWhereNull("$wpf.aparecer")
            ;
        })
        // ->orderByRaw("$d.ordenar, $d.ordenar2, $d.ordenar3, $d.descricao")
        ->get();
        return $data;
    }
}

<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProdutosIndex extends Model
{
    protected $table = 'tb_index';
    protected $primaryKey = 'cod_index';

    public static function exibirProdutosIndexModel(){
        $data = DB::table('tb_index')
        ->select(DB::raw('cod_index as id, nome_index, ordenar, ordenar2, ordenar3'))
        ->get();
        return $data;
    }
}
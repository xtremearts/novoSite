<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Linha extends Model
{
    protected $table = 'tb_linha';
    protected $primaryKey = 'cod_linha';
    
    public static function exibirLinhasModel(){
        $linha = DB::table('tb_linha')
        ->select(DB::raw('cod_linha as id, linha as nome'))
        ->orderBy('ordenar')
        ->get();
        return $linha;
    }
}

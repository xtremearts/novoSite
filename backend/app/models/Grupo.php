<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Grupo extends Model
{
    protected $table = 'tb_grupo';
    protected $primaryKey = 'cod_grupo';

    public static function exibirGruposModel(){
        $grupo = DB::table('tb_grupo')
        ->select(DB::raw('cod_grupo as id, grupo, cod_linha as idLinha'))
        ->get();
        return $grupo;
    }
}

<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SubGrupo extends Model
{
   protected $table = 'tb_subgrupo';
   protected $primaryKey = 'cod_subgrupo';

   public static function exibirSubgrupoModel($id){
      $subGrupo = DB::table('tb_subgrupo')
      ->select(DB::raw('cod_subgrupo as id, cod_grupo, subgrupo, ordenar, ordenar2, ordenar3'))
      ->where('cod_grupo', $id)
      ->get();
      return $subGrupo;
   }

   public static function exibirSubgrupoModelId($id){
      $subGrupo = DB::table('tb_subgrupo')
      ->select(DB::raw('cod_subgrupo as id, cod_grupo, subgrupo, ordenar, ordenar2, ordenar3'))
      ->where('cod_subgrupo', $id)
      ->get();
      return $subGrupo;
   }
}

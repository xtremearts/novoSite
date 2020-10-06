import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { ProdutoUnicoComponent } from './lancamentos/produto-unico/produto-unico.component';
import { ProdutoUnicoLancamentoComponent } from './lancamentos/produto-unico-lancamento/produto-unico-lancamento.component';



@NgModule({
  declarations: [LancamentosComponent, ProdutoUnicoComponent, ProdutoUnicoLancamentoComponent],

  imports: [
    CommonModule
  ],




  
})
export class SistemaModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPaginaComponent } from './index-pagina/index-pagina.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ContatoComponent } from './contato/contato.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { BuscarProdutoComponent } from './produtos/buscar/buscar-produto/buscar-produto.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LancamentosComponent } from './sistemas/lancamentos/lancamentos.component';

const routes: Routes = [
    {path: '', component: IndexPaginaComponent},
    {path: 'produtos', component: ProdutoComponent},
    {path: 'produtos/:idlinha/:idGrupo', component: ProdutoListaComponent},
    {path: 'produtos/:idlinha/:idGrupo/:id' , component: ProdutoListaComponent },
    {path: 'contato', component: ContatoComponent},
    {path: 'parceiros',component: ParceirosComponent},
    {path: 'buscar', component: BuscarProdutoComponent},
    {path: 'buscar/:id', component: BuscarProdutoComponent},
    {path: 'cabecalho', component: CabecalhoComponent},
    {path: 'sistema/lancamentos', component: LancamentosComponent},
    {path: '**', component: IndexPaginaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

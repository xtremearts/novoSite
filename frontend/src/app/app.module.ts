import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FiliaisIndexComponent } from './filiais-index/filiais-index.component';
import { TituloPaginasComponent } from './titulo-paginas/titulo-paginas.component';
import { ProdutoDestaqueIndexComponent } from './produto-destaque-index/produto-destaque-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ProdutosLinhaIndexComponent } from './produtos-linha-index/produtos-linha-index.component';
import { ProdutoPaginaComponent } from './produtos/produto-pagina/produto-pagina.component';
import { IndexPaginaComponent } from './index-pagina/index-pagina.component';
import { BuscarComponent } from './produtos/buscar/buscar.component';
import { AppRoutingModule } from './app.routing';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoMenuComponent } from './produtos/produto-menu/produto-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoUnicoComponent } from './produtos/produto-unico/produto-unico.component';
import { ProdutoModalComponent } from './produtos/produto-modal/produto-modal.component';
import { ValoresUnicosPipe } from './valores-unicos.pipe';
import { ContatoComponent } from './contato/contato.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { BuscarCabecalhoComponent } from './produtos/buscar/buscar-cabecalho/buscar-cabecalho.component';
import { BuscarProdutoComponent } from './produtos/buscar/buscar-produto/buscar-produto.component';
import { InfoWinthorDirective } from './diretivas/info-winthor.directive';
import { LancamentosComponent } from './sistemas/lancamentos/lancamentos.component';
import { ProdComponent } from './sistemas/lancamentos/prod/prod.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BannerComponent,
    FiliaisIndexComponent,
    TituloPaginasComponent,
    ProdutoDestaqueIndexComponent,
    FooterComponent,
    ProdutosLinhaIndexComponent,
    ProdutoPaginaComponent,
    IndexPaginaComponent,
    ProdutoMenuComponent,
    BuscarComponent,
    ProdutoListaComponent,
    ProdutoComponent,
    ProdutoUnicoComponent,
    ProdutoModalComponent,
    ValoresUnicosPipe,
    ContatoComponent,
    ParceirosComponent,
    BuscarCabecalhoComponent,
    BuscarProdutoComponent,
    InfoWinthorDirective,
    LancamentosComponent,
    ProdComponent,

  ],

  imports: [
    BrowserAnimationsModule ,
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,




  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable, OnDestroy, Input, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoModalComponent } from './produto-modal/produto-modal.component';
import { ProdComponent } from '../sistemas/lancamentos/prod/prod.component';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  // ROTAS API
  filialAtiva              = 'http://localhost:8000/API/filial/';
  produtosNomeURL          = 'http://localhost:8000/API/produtosnome/';
  produtosNomeIndexURL     = 'http://localhost:8000/API/produtosnomeindex/';
  produtosDescricaoURL     = 'http://localhost:8000/API/produtosdescricao/';
  produtosDescricaoIndex   = 'http://localhost:8000/API/produtosdescricaoindex/';
  produtosIndexUrl         = 'http://localhost:8000/API/produtosindex/';
  produtosGrupoURL         = 'http://localhost:8000/API/produtosnomegrupo/';
  produtosBuscarURL        = 'http://localhost:8000/API/buscar/';
  produtosWinthorURL       = 'http://localhost:8000/API/winthor-produtos/';
  produtosLancamentos      = 'http://localhost:8000/API/lancamentos/'

  produtosLancamentosIndex = 'http://localhost:8000/API/lancamentos-index/'

  // -----------------------------

  // informa o item clicado no momento ou ativo na tela
  grupoAtivo: number;
  subGrupoAtivo: number;
  produtoAtivo: number;
  indexAtivo: number
  valorBusca:String;
  buscarProduto:String;
  idWinthor:number;
  // -----------------------------

  // objetos criados para o NG For
  produtosNomeApi: any = [];
  produtosNomeApiAtivo: any = [];
  produtosDescricaoApi: any = [];
  produtosDescricaoApiIndex: any = [];
  produtosIndexApi: any = [];
  produtosNomeIndex: any = [];
  produtosImagens: any = [];
  produtosBusca: any = [];
  buscaApi: any = [];

  produtosLancamentoApi: any = [];
  produtosLancamentosIndexApi: any = [];


  produtoWinthor: any = [];

  produtoWinthorPush: any = [];
  sessaoAtiva: any = [];






  // -----------------------------


  urlImagensProdutos:String     = 'http://www.novacasadistribuidora.com/links/imagens/produtos_alta_resolucao/';
  urlImagensFornecedores:String = 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/';
  // Carregar Rotas Backend

  exibirProdutosNome() {
    this.http
      .get(this.produtosGrupoURL + this.grupoAtivo)
      .subscribe(data => this.produtosNomeApi = data)
  }

  exibirProdutoDescricao() {
    this.http
      .get(this.produtosDescricaoURL +  this.produtoAtivo)
      .subscribe(data => this.produtosDescricaoApi = data);
  }

  exibirProdutoNomeAtivo() {
    this.http
      .get(this.produtosNomeURL + this.produtoAtivo)
      .subscribe(data => this.produtosNomeApiAtivo = data)
  }

  exibirProdutoNomeIndex() {
    this.http
      .get(this.produtosNomeIndexURL + this.indexAtivo)
      .subscribe(data => this.produtosNomeIndex = data)
  }

  exibirProdutoIndex() {
    this.http
      .get(this.produtosIndexUrl)
      .subscribe(data => this.produtosIndexApi = data)
  }

  exibirProdutoDescricaoIndex() {
    this.http
      .get(this.produtosDescricaoIndex + this.produtoAtivo)
      .subscribe(data => this.produtosDescricaoApiIndex = data);
  }

  buscarProdutos(){
    this.http
      .get(this.produtosBuscarURL + this.buscarProduto)
      .subscribe(data => this.buscaApi = data)
  }

  exibirProdutoWinthor(){
    this.http
    .get(this.produtosWinthorURL + this.idWinthor)
    .subscribe(data => this.produtoWinthor = data)
  }

  exibirProdutoLancamentoIndex(){
    this.http
    .get(this.produtosLancamentosIndex)
    .subscribe(data=> this.produtosLancamentosIndexApi = data)
  }

  ativarSessaoFilial(id){
    this.http
    .get(this.filialAtiva + id)
    .subscribe( data => this.sessaoAtiva = data)
      console.log(this.sessaoAtiva);
    ;
  }

  // ----------------------------------------------------

  // exibirProdutoWinthorTeste(id){
  //   this.http
  //   .get(this.produtosWinthorURL + id)
  //   .subscribe(data => this.produtoWinthor = data)
  // }

  // exibirConsole(id){
  //   console.log("O teste de id será:" + id)
  //   this.exibirProdutoWinthorTeste(id);
  // }

  // ativarProdutoWinthor(id){
  //   // this.idWinthor = id;

  //   this.exibirProdutoWinthorTeste(id)
  //   // return console.log(this.idWinthor)
  // }

  // ----------------------------------------------------

  indexClicado(id_index) {
    this.indexAtivo = id_index;
  }

  // exibe o modal em qualquer lugar chamado
  exibirModal() {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.currentDialog = this.modalService.open(ProdutoModalComponent, { centered: true, size: 'xl' });

      this.currentDialog.result.then(result => {
        history.go(-1);
      }, reason => {
        history.go(-1);
      });
    });
  }

  ngOnDestroy() {
    // this.destroy.next();
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public router: Router,
  ) {

  }
}

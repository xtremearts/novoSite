import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})

export class LinhasService {

  linhasURL =      'http://localhost:8000/API/linhas/';
  gruposURL =      'http://localhost:8000/API/grupos/';
  subGruposURL =   'http://localhost:8000/API/subgruposgrupo/';
  subGruposURLId = 'http://localhost:8000/API/subgrupos/';

  linhaClicado:number;
  posicaoClicado:number = 0;

  linhaAtiva:number;
  linhaAtivaAnteriormente:number;
  
  grupoAtivo:number;
  subGrupoAtivo = 0;

  paginaAtiva:boolean;

  linhasAPI: any = [];
  gruposAPI: any = [];
  subGruposAPI: any = [];

  linhasAPIClicada: any = [];
  gruposAPIClicada: any = [];
  subGruposAPIClicada: any = [];

  cliques = 0;

  mudarEstadoLinha(i) {
    this.cliques += 1; //Conta cliques

    let linhaAnterior = this.linhaClicado; //salva a ultima linha clicada

    this.linhaClicado = this.linhasAPI[i].id; // adiciona a linha clicada atualmente

    //Verifica se foi clicado na mesma linha, caso sim, fecha
    if (linhaAnterior == this.linhasAPI[i].id && this.cliques == 2) {
      this.cliques = 0;
      this.linhaClicado = 0;
    }

    if (linhaAnterior != this.linhasAPI[i].id) {
      this.cliques = 1;
    }

    // Abre todos os menus caso tenha alguma linha ativa.
    if(this.linhaAtiva != 0 && this.cliques == 1) {
      // console.log("Linha clicada" + this.cliques);
      this.linhaAtiva = 0;
      this.clicarFora();
    }

    //Salva temporáriamente a posição clicada
    this.posicaoClicado = i;

    //Volta o estado do subgrupo para o valor padrão
    this.subGrupoAtivo = 0;
    
  }





  clicarFora(){
    
    // this.cliques += 1;
    // if(this.cliques == 1){
    //   this.linhaAtiva = this.linhaAtivaAnteriormente;
    //   console.log("Foi clicado fora!");
    //   console.log("Cliques é: " + this.cliques);
    // }

    // this.linhaAtiva = 4;
    // this.cliques = 0;

    // let div = document.createElement("div");
    // document.body.appendChild(div);


    // let background = document.body;
    // background.classList.add("modal-open");


    // let background = document.getElementById("bg-branco");
    // background.classList.add("bg-branco");

 // let addBGClass = classList.add("bg-branco");


    // let lista = "<div class='bg-branco'></div>";
    // document.getElementById("bg-branco").innerHTML = lista
    // console.log("Foi clicado fora!");

    // document.body.innerHTML = lista;

  }


  // var list = document.getElementById("myList").firstElementChild.innerHTML;
  // document.getElementById("demo").innerHTML = list;
  

  exibirLinha(){
    this.http
      .get(this.linhasURL)
      .subscribe( data=> this.linhasAPI = data)
  }

  exibirGrupo(){
    this.http
      .get(this.gruposURL)
      .subscribe( data=> this.gruposAPI = data);
  }

  exibirSubGrupo(){
    this.http
      .get(this.subGruposURL + this.grupoAtivo)
      .subscribe( data=> this.subGruposAPI = data)
  }

  exibirSubGrupoClicado(id){
    this.http
      .get(this.subGruposURLId + id)
      .subscribe( data=> this.subGruposAPIClicada = data)
  }

  exibirGrupoAtivo(){
    this.http
      .get(this.gruposURL + this.grupoAtivo)
      .subscribe( data=> this.gruposAPIClicada = data)
  }

  exibirLinhaAtiva(){
    this.http
      .get(this.linhasURL + this.linhaAtiva)
      .subscribe( data=> this.linhasAPIClicada = data)
  }

  ativarSubgrupo(id){
    this.subGrupoAtivo = id;
  }

  constructor(
    private http: HttpClient,
    private modal: NgbModal
  ) {
    this.linhaClicado = 0;
  }
}

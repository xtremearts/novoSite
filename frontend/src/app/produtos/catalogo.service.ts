import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { ProdComponent } from '../sistemas/lancamentos/prod/prod.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  // Sistema de Lançamentos
  arrayProdutosLancamento = [];

  array = [1];
  produtosLancamentosUrl     = 'http://localhost:8000/API/lancamentos-busca/';
  produtosLancamentosNomeUrl = 'http://localhost:8000/API/lancamentos-busca-nome/';

  produtosLancamentos: any = [];
  produtosLancamentosNome: any = [];

  @ViewChild('produto')produtoComponente: ProdComponent;
  // @ViewChild('ProdutoNome')qtdIndiceLancamentos:ElementRef;


  qtdIndiceLancamentos: any;

  produtosFiltro: String;

  arrayCodNome = []

  //Remove os valores duplicados do array
  novoArray = [...new Set(this.arrayCodNome)];

  exibirProdutosLancamentos() {
    this.http
      .get(this.produtosLancamentosUrl + this.produtosFiltro)
      .subscribe(data => this.produtosLancamentos = data);
  }

  exibirProdutosLancamentosNome() {
    this.http
      .get(this.produtosLancamentosNomeUrl + this.produtosFiltro)
      .subscribe(data => this.produtosLancamentosNome = data);
  }

  ativarProdutos() {
    this.exibirProdutosLancamentosNome();
    this.exibirProdutosLancamentos();
    console.log(this.produtoComponente);
  }

    constructor(
      public http:HttpClient,
    ) { }
  }

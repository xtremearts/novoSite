import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from '../produtos/produtos.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})

export class CabecalhoComponent implements OnInit {


  

  menuLista: any[] = [
    {
      "nome" : "PARCEIROS",
      "linkImg" : "assets/imagens/header-parceiros.svg",
      "link": "parceiros"
    },
    {
      "nome" : "A NOVA CASA",
      "linkImg" : "assets/imagens/header-nc.svg",
      "link": "produtos-pagina"
    },
    {
      "nome" : "SOBRE O G8",
      "linkImg" : "assets/imagens/header-g8.svg",
      "link": "produtos-pagina"
    },
    {
      "nome" : "PRODUTOS",
      "linkImg" : "assets/imagens/header-produtos.svg",
      "link": "produtos"
    },
    {
      "nome" : "CONTATO",
      "linkImg" : "assets/imagens/header-contato.svg",
      "link": "contato"
    }
  ]

  outrosContatos: any[] =  [
    {
      "nome" : "QUERO SER CLIENTE",
      "link" : "*"
    },
    {
      "nome" : "QUERO SER COLABORADOR",
      "link" : "*"
    },
    {
      "nome" : "QUERO SER FORNECEDOR",
      "link" : "*"
    },

  ]

  regioesAtendidas: any[] = [
    {
      "nome": "DF, TO, PA",
      "id": "2"
    },
    {
      "nome": "MINAS GERAIS",
      "id": "12"
    },
    {
      "nome": "GOIÁS",
      "id": "4"
    },
  ]

  sessaoAtiva: String;




  ngOnInit(): void {
    this.produtos.ativarSessaoFilial(35);
  }


  constructor(
    public http: HttpClient,
    public produtos: ProdutosService

  ) {

    
   
  }

}

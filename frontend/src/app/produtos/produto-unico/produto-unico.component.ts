import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-produto-unico',
  templateUrl: './produto-unico.component.html',
  styleUrls: ['./produto-unico.component.css']
})
export class ProdutoUnicoComponent implements OnInit {


  @Input()
  nomeFornecedor: String;

  @Input()
  codFornecedor: number;

  @Input()
  nome: String;

  @Input()
  id: number;

  @Input()
  fornecedor: String;

  imagemProduto: string;
  imagemFornecedor: string


  constructor(
    private http:HttpClient,
    private route:ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.imagemProduto = 'http://www.novacasadistribuidora.com/links/imagens/produtos_alta_resolucao/' + this.id +'.jpg';
    this.imagemFornecedor = 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/' + this.codFornecedor + '.jpg';

    // this.imagemProduto = 'assets/imagens/produto_temp.jpg';
    // this.imagemFornecedor = 'assets/imagens/logo_temp.jpg';


  }

}


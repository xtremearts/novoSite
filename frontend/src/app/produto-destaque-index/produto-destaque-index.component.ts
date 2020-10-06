import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos/produtos.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produto-destaque-index',
  templateUrl: './produto-destaque-index.component.html',
  styleUrls: ['./produto-destaque-index.component.css']
})


export class ProdutoDestaqueIndexComponent implements OnInit {

  tituloPaginas = 'PRODUTOS EM DESTAQUE';
  corTitulo = 'produto-destaque';
  corTituloSvg = 'produto-destaque-svg'

produto: any[] = [
{
  'img': 'http://localhost/site/links/imagens/produtos_alta_resolucao/17497.jpg',
  'cod_nome': '17497',
  'nome': 'BASE METALATEX ACETINADO LATA 16 LITROS',
  'cod_fornecedor': 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/381.jpg',
  'fornecedor': 'SHERWIN WILLIAMS'
},
{
  'img': 'http://localhost/site/links/imagens/produtos_alta_resolucao/17497.jpg',
  'cod_nome': '17497',
  'nome': 'BASE METALATEX ACETINADO LATA 16 LITROS',
  'cod_fornecedor': 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/381.jpg',
  'fornecedor': 'SHERWIN WILLIAMS'
},
{
  'img': 'http://localhost/site/links/imagens/produtos_alta_resolucao/17497.jpg',
  'cod_nome': '17497',
  'nome': 'BASE METALATEX ACETINADO LATA 16 LITROS',
  'cod_fornecedor': 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/381.jpg',
  'fornecedor': 'SHERWIN WILLIAMS'
},
{
  'img': 'http://localhost/site/links/imagens/produtos_alta_resolucao/17497.jpg',
  'cod_nome': '17497',
  'nome': 'BASE METALATEX ACETINADO LATA 16 LITROS',
  'cod_fornecedor': 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/381.jpg',
  'fornecedor': 'SHERWIN WILLIAMS'
},

]

  constructor(
    public produtos:ProdutosService,

  ) {

    
  }

  ngOnInit(): void {
    this.produtos.exibirProdutoLancamentoIndex();
  }

}

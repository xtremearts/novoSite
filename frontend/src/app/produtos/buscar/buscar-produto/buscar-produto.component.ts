import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { FornecedoresService } from 'src/app/fornecedores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-produto',
  templateUrl: './buscar-produto.component.html',
  styleUrls: ['./buscar-produto.component.css']
})
export class BuscarProdutoComponent implements OnInit {
  tituloPaginas = "BUSCAR PRODUTOS";
  corTitulo     = "produto-linha";
  corTituloSvg  = "produto-linha-svg";

  constructor(
    public fornecedores:FornecedoresService,
    public produtos:ProdutosService,
    public rotaAtiva:ActivatedRoute
    ) { }

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(params => {
      let idProduto = parseInt(params.get("id"));
      this.produtos.produtoAtivo = idProduto;

    });

    this.produtos.buscarProdutos();
    this.produtos.exibirProdutosNome();
    this.produtos.exibirProdutoNomeAtivo();


  }

}

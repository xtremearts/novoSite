import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service'
import { LinhasService } from '../linhas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  tituloPaginas = 'PRODUTOS';
  corTitulo = "produto-linha";
  corTituloSvg = "produto-linha-svg";

  grupoAtivo: number;

  constructor(
    public linhas: LinhasService,
    public produtos: ProdutosService,
    private rotaAtiva: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(params => {
      let linhaAtiva = parseInt(params.get("idlinha"));
      this.linhas.linhaAtiva = linhaAtiva;
      this.linhas.linhaAtivaAnteriormente = linhaAtiva;
      this.linhas.paginaAtiva = true;
    })

    this.rotaAtiva.paramMap.subscribe(params => {
      let idGrupo = parseInt(params.get("idGrupo"));
      this.linhas.grupoAtivo = idGrupo;
      this.produtos.grupoAtivo = idGrupo;
    });

    this.rotaAtiva.paramMap.subscribe(params => {
      let idProduto = parseInt(params.get("id"));
      this.produtos.produtoAtivo = idProduto;
      console.log('O id do produtos é' + idProduto);
    });

    this.produtos.exibirProdutosNome();
    this.linhas.exibirGrupoAtivo();
    this.linhas.exibirSubGrupo();
    this.linhas.exibirLinhaAtiva();
    this.produtos.exibirProdutoNomeAtivo();
    // this.produtos.exibirProdutoWinthor();
    // this.produtos.exibirProdutoWinthor();
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service'
import { LinhasService } from '../linhas.service';

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
    private route: ActivatedRoute,
    public linhas: LinhasService,
    public produtos: ProdutosService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.linhas.linhaAtiva = parseInt(params.get("idlinha"));
      this.linhas.paginaAtiva = true;
    })

    this.route.paramMap.subscribe(params => {
      let idGrupo = parseInt(params.get("idGrupo"));
      this.linhas.grupoAtivo = idGrupo;
      this.produtos.grupoAtivo = idGrupo;
    });

    this.produtos.exibirProdutosNome();
    this.linhas.exibirLinhaAtiva();
    this.linhas.exibirGrupoAtivo();
    this.linhas.exibirSubGrupo();
  }
}
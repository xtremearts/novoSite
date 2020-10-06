import { Component, OnInit, Input } from '@angular/core';
import { LinhasService } from '../linhas.service';

@Component({
  selector: 'app-produto-menu',
  templateUrl: './produto-menu.component.html',
  styleUrls: ['./produto-menu.component.css']
})

export class ProdutoMenuComponent implements OnInit {

  tituloPaginas = 'PRODUTOS';
  corTitulo = "produto-linha";
  corTituloSvg = "produto-linha-svg";

  @Input() linhaAtiva: number;


  ngOnInit(): void {
    // this.linhas.exibirGrupoAtivo();
    this.linhas.exibirLinha();
    this.linhas.exibirGrupo();
    this.linhas.linhaClicado = 0;
   
  }

  constructor(
    public linhas: LinhasService,
    
    ){

      this.linhas.paginaAtiva = false;
  }

}

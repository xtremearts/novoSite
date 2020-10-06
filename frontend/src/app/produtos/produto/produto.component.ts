import { Component, OnInit } from '@angular/core';
import { LinhasService } from '../linhas.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  tituloPaginas = 'PRODUTOS';
  corTitulo = "produto-linha";
  corTituloSvg = "produto-linha-svg";

  constructor(public linhas:LinhasService) { }

  ngOnInit(): void {
    this.linhas.linhaAtiva = 0;
    
  }

}

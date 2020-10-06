import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {
  tituloPaginas = 'PARCEIROS';
  corTitulo     = "produto-linha";
  corTituloSvg  = "produto-linha-svg";

  

  constructor(
    public fornecedores:FornecedoresService
    ) { }

  ngOnInit(): void {
    this.fornecedores.exibirFornecedores();
    console.log(this.fornecedores.fornecedoresAPI)
  }

}

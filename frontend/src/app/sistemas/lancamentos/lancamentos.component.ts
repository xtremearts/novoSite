import { Component, OnInit, ViewChild, AfterContentInit, Input, ElementRef } from '@angular/core';
import { CatalogoService } from 'src/app/produtos/catalogo.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit, AfterContentInit {
 ;

utosFiltro = '22416,30510,22417, 18934, 33454, 12705, 24900, 15358, 15505, 12932, 15951, 15952, 15363, 17591, 12933, 11620, 33861, 33819';

  arrayCodNome = []

  //Remove os valores duplicados do array
  novoArray = [ ...new Set( this.arrayCodNome ) ];

  @ViewChild('ProdutoNome')qtdIndiceLancamentos:ElementRef;

exibirArray(produto){
  // for (var produto of this.produtosLancamentosNome) 
  
}

  constructor(
    public catalogo:CatalogoService

  ) {
    
  }

  ngOnInit(): void {
    this.catalogo.qtdIndiceLancamentos;
  }

  ngAfterContentInit(){
  }

}

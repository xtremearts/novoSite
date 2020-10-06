import { Component, Input, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-produto-modal',
  templateUrl: './produto-modal.component.html',
  styleUrls: ['./produto-modal.component.css']
})
export class ProdutoModalComponent implements OnInit {

  @Input() idProduto;

  filter = new FormControl('');

  constructor(
    public produtos: ProdutosService,
    public modal: NgbActiveModal,
  ) {
    this.produtos.exibirProdutoNomeAtivo();
  }

  ngOnInit(): void {
    this.produtos.exibirProdutoDescricao();
    this.produtos.exibirProdutoIndex();
    this.produtos.exibirProdutoDescricaoIndex();
    this.produtos.exibirProdutoNomeIndex();
    // this.produtos.exibirProdutoWinthor();

    // console.log(this.produtos.produtoWinthor)
  }
}

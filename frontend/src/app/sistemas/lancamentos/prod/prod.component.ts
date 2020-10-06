import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {



  @Input()
  nome:String;

  @Input()
  codNome:number;

  @Input()
  codFornecedor:number;

  @Input()
  produtosDescricao:any = [];



  constructor(
  ) { }

  ngOnInit(): void {
  }

}

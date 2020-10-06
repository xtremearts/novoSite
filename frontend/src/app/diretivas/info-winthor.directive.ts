import { Directive, Input, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos/produtos.service';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Directive({
  selector: '[appInfoWinthor]',

})


export class InfoWinthorDirective implements OnInit {

  @Input() id:number;


  ngOnInit(){
    this.retornarDadosWinthor(this.id);
    this.exibirProdutos(this.id);
  }


  retornarDadosWinthor(id){
    this.http
    .get(this.produtos.produtosWinthorURL + id)
    .subscribe(data => this.produtos.produtoWinthor= data)
  }

  exibirProdutos(id){
    this.produtos.produtoWinthorPush.push(this.produtos.produtoWinthor);
    console.log('Estou na diretiva ' + id);
    console.log(this.produtos.produtoWinthorPush);



    // Object.assign(this.produtoWinthor, this.produtos.produtosDescricaoApi)
    // this.produtos.produtosDescricaoApi.array.concat()
    // this.produtos.produtosDescricaoApi.push('50')
    // this.produtoWinthor.produto.push('TEste: 5');

    // var resultado = "";
    // for (var i in obj) {
    //   if (obj.hasOwnProperty(i)) {
    //       resultado += obj + "..................." + i + " = " + obj[i] + "\n";
    //   }
    // }
    // return console.log(resultado);



    // var obj = this.produtoWinthor
    // for (let produto in obj) {
    //     console.log(produto);
    // }

    // for (let itens of this.produtoWinthor){
    //   return console.log("éééééééééééééé: " + itens.id)
    // }

    // console.log(this.produtoWinthor)

    // for (let i = 0; i < this.produtoWinthor.length; i++) {
    //   return console.log(this.produtoWinthor[i])
      // const produto = this.produtoWinthor[i];
      // return console.log(produto.id);
      
    // }

    // console.log(this.produtoWinthor.length)
    // console.log(this.produtoWinthor['cod_nome']);

  }

  constructor(
    private produtos:ProdutosService,
    private http:HttpClient

  ) { 

    
  }

}

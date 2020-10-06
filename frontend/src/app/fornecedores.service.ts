import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  fornecedoresUrl = 'http://localhost:8000/API/fornecedores/';

  fornecedoresAPI: any = [];

  exibirFornecedores(){
    this.http
    .get(this.fornecedoresUrl)
    .subscribe(data=> this.fornecedoresAPI = data)
  }
  

  constructor(
    public http: HttpClient
    
    ) {  }
}

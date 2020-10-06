import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  filiais:any = [
    {
      'id': 2,
      'filial': 'FILIAL BRASÍLIA',
      'endereco': 'Polo de Desenvolvimento JK Trecho 05 Conjunto 03 Lote 1 - Santa Maria-DF',
      'telefone': '(61) 3355-5100',
      'imagemFilial': 'assets/imagens/filial-df.jpg'
    },

    {
      'id': 4,
      'filial': 'FILIAL GOIÂNIA',
      'endereco': 'Rodovia BR 153 - KM 05, Galpão 04 Módulo 01/02 - Jardim Guanabara, Goiânia - GO, 74675-090',
      'telefone': '(62) 3605-1400',
      'imagemFilial': 'assets/imagens/filial-go.jpg'
    },

    {
      'id': 12,
      'filial': 'FILIAL MINAS GERAIS',
      'endereco': 'Av. Geraldo Rocha, 548 - Chácara Cotia, Contagem - MG',
      'telefone': '(31) 3555-4900',
      'imagemFilial': 'assets/imagens/filial-mg.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

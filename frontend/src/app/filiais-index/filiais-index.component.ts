import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filiais-index',
  templateUrl: './filiais-index.component.html',
  styleUrls: ['./filiais-index.component.css']
})
export class FiliaisIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  filiais: any[] = [
    {
      "nome": "FILIAL MINAS GERAIS",
      "img": "assets/imagens/filial-mg.jpg",
      "link": "*",
      "atributos": [
        "10.000 produtos",
        "15.000 m²",
        "Contagem - MG",
      ],
    },

    {
      "nome": "FILIAL BRASÍLIA",
      "img": "assets/imagens/filial-df.jpg",
      "link": "*",
      "atributos": [
        "10.000 produtos",
        "15.000 m²",
        "Brasília - DF",
      ],
    },

    {
      "nome": "FILIAL GOIÁS",
      "img": "assets/imagens/filial-go.jpg",
      "link": "*",
      "atributos": [
        "10.000 produtos",
        "15.000 m²",
        "Goiânia - GO",
      ],
    }

  ]


}

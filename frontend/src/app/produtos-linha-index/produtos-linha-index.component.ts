import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-produtos-linha-index',
  templateUrl: './produtos-linha-index.component.html',
  styleUrls: ['./produtos-linha-index.component.css']
})
export class ProdutosLinhaIndexComponent implements OnInit {

  tituloPaginas = 'PRODUTOS POR LINHA';
  corTitulo = "produto-linha";
  corTituloSvg = "produto-linha-svg";

  produto: any[] = [
    {
      'img': 'assets/imagens/home_abrasivos.jpg',
      'linha': 'ABRASIVOS',
    },

    {
      'img': 'assets/imagens/home_ferragens.jpg',
      'linha': 'FERRAGENS',
    },

    {
      'img': 'assets/imagens/home_ferramentas_manuais.jpg',
      'linha': 'FERRAMENTAS MANUAIS',
    },

    {
      'img': 'assets/imagens/home_ferramentas_eletricas.jpg',
      'linha': 'FERRAMENTAS ELÉTRICAS',
    },

    {
      'img': 'assets/imagens/home_protecao_epi.jpg',
      'linha': 'PROTEÇÃO EPI',
    },

    {
      'img': 'assets/imagens/home_ferragens.jpg',
      'linha': 'FERRAGENS',
    },
    
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

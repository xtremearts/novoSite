import { Component, OnInit } from '@angular/core';
import { LinhasService} from '../produtos/linhas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



paginas: any[] = [
  {
    'nome': 'A NOVA CASA',
    'link': '*',
  },
  {
    'nome': 'FORNECEDORES',
    'link': '*',
  },
  {
    'nome': 'REGIÕES DE ENTREGA',
    'link': '*',
  },
  {
    'nome': 'PREMIAÇÕES',
    'link': '*',
  },
  {
    'nome': 'TELEVENDAS',
    'link': '*',
  },

  {
    'nome': 'CONTATO',
    'link': '*',
  },
]


  constructor(public linhas: LinhasService) { }

  ngOnInit(): void {
  }

}

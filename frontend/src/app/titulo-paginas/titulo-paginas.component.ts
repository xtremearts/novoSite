import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-titulo-paginas',
  templateUrl: './titulo-paginas.component.html',
  styleUrls: ['./titulo-paginas.component.css']
})
export class TituloPaginasComponent implements OnInit {

  @Input() tituloPaginas: string;

  @Input() corTitulo: string;

  @Input() corTituloSvg: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}

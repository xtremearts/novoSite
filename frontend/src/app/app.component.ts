import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [

  ]
})

export class AppComponent {
  title = 'siteNC';
  urlImagensProdutos:String     = 'http://www.novacasadistribuidora.com/links/imagens/produtos_alta_resolucao/'
  urlImagensFornecedores:String = 'http://www.novacasadistribuidora.com/links/imagens/fornecedores/fornecedores_produtos/'




}


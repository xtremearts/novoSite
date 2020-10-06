import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProdutoModalComponent } from '../produto-modal/produto-modal.component';
import { ProdutosService } from '../produtos.service';
import { LinhasService } from '../linhas.service';

@Component({
  selector: 'app-modal-container',
  // templateUrl: './produto-lista.component.html',
  template: '<router-outlet></router-outlet>'
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router,
    public produtosService: ProdutosService,
    public linhas: LinhasService
  ) {

    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
        // When router navigates on this component is takes the params and opens up the photo detail modal
        this.currentDialog = this.modalService.open(ProdutoModalComponent, {centered: true, size: 'xl'});
        this.currentDialog.componentInstance.idProduto = params.id;
        this.produtosService.produtoAtivo = params.id;

        // Go back to home page after the modal is closed
        this.currentDialog.result.then(result => {
            // history.go(-1);
            router.navigateByUrl('produtos/' + this.linhas.linhaAtiva + '/' + this.linhas.grupoAtivo);

        }, reason => {
            // history.go(-1);
            // router.navigateByUrl('produtos/:idlinha/:idGrupo/');
            router.navigateByUrl('produtos/' + this.linhas.linhaAtiva + '/' + this.linhas.grupoAtivo);
        });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
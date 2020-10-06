import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  animations: [
    trigger('bannerAnimation', [
      state('inicial', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('final', style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),

      transition('inicial => final', animate('1s')),
      transition('final => inicial', animate('0.5s')),
    ]),
    
    //------------------------------------------------------
    trigger('animationSlider', [
      state('inicial', style({
        opacity: 1,
      })),

      state('final', style({
        display: 'none',
      })),

      transition('inicial => final', animate('1s')),
      transition('final => inicial', animate('1s')),

    ]),

    //------------------------------------------------------

    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),

    //----------------------------------------------------------
    
  ],
  
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
    
})

export class BannerComponent implements OnInit {





  linkBanner = 'assets/imagens/banners/';

  images = ["banner_nc", "banner_nc2"].map((n) => this.linkBanner + `${n}.jpg`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  titulos: any[] = [
    {
      "imgBanner": this.linkBanner + 'img_banner1.png',
      "titulo": "CATÁLOGO DE PRODUTOS",
      "subtitulo": "Conheça nosso mix com mais de 13.000 itens disponíveis",
      "link": "*"
    },
    {
      "imgBanner": this.linkBanner + 'img_banner2.png',
      "titulo": "4º RANKING ANAMACO",
      "subtitulo": "Eleita ano após ano entre as maiores distribuidoras do Brasil",
      "link": "*"
    },
  ]

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
     
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  constructor() { }
  ngOnInit(): void {
    
  }

}

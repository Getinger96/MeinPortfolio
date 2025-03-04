import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { PorfolioService } from '../porfolio.service';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, DatenschutzComponent, ImpressumComponent,RouterOutlet,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) {

  }
  ngOnInit() { }

  ngOnDestroy() {
    this.removeBodyClass();
  }

  portfolio = inject(PorfolioService)

  chooseEnglisch() {
    this.portfolio.chooseEnglisch()
  }

  chooseGerman() {
    this.portfolio.chooseGerman()
  }

  openMenu() {
    this.renderer.addClass(this.document.body, 'no-scroll')
    this.portfolio.openMenu();

  }

  private removeBodyClass() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }
}

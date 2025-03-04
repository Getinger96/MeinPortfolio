import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PorfolioService } from '../porfolio.service';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterModule, RouterLink],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,) {
      
  }
  portfolio = inject(PorfolioService);
  overlayvisible = false;
  ngOnInit() {

    
    
      window.scrollTo(0, 0)
    

    // Beim Initialisieren die Sprache aus dem LocalStorage abrufen
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'german') {
      this.portfolio.languageGerman = true;
      this.portfolio.languageEnglisch = false;
    } else if (storedLanguage === 'english') {
      this.portfolio.languageGerman = false;
      this.portfolio.languageEnglisch = true;
    }
  }


  ngOnDestroy() {
    this.removeBodyClass();
  }


  

  openMenu() {
    this.portfolio.openMenu();
    this.renderer.addClass(this.document.body, 'no-scroll')
  }

  closeMenu() {
    this.portfolio.closeMenu();
    this.removeBodyClass();


  }
  private removeBodyClass() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }
}

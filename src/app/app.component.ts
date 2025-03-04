import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet, RouterLink, RouterModule, Router, NavigationEnd } from '@angular/router';
import { PorfolioService } from './porfolio.service';
import { ContactMeComponent } from "./main-content/contact-me/contact-me.component";
import { WhyMeComponent } from './main-content/why-me/why-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { MyProjectsComponent } from './main-content/my-projects/my-projects.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import Aos from 'aos';
import { MainContentComponent } from "./main-content/main-content.component";
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactMeComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, FooterComponent, NavBarComponent, RouterLink, MainContentComponent, DatenschutzComponent, ImpressumComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
  potfolio = inject(PorfolioService)
  constructor( ) {
    Aos.init();
  }

  ngOnInit(): void {


    // Beim Initialisieren die Sprache aus dem LocalStorage abrufen
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'german') {
      this.potfolio.languageGerman = true;
      this.potfolio.languageEnglisch = false;
    } else if (storedLanguage === 'english') {
      this.potfolio.languageGerman = false;
      this.potfolio.languageEnglisch = true;
    }




  }

}

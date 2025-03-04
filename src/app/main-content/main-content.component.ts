import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject,Renderer2,OnInit,OnDestroy, Inject } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PorfolioService } from './../porfolio.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,AboveTheFoldComponent,WhyMeComponent,MyProjectsComponent,MySkillsComponent,ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {
  potfolio = inject(PorfolioService)
  constructor() { }
  
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

import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { PorfolioService } from '../porfolio.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {


 constructor( private renderer: Renderer2,
       @Inject(DOCUMENT) private document: Document,private router: Router){
   
     }
     ngOnInit() {
     
        window.scrollTo(0, 0)
    
    }
    portfolio = inject(PorfolioService);
 
  openMenu(){
    this.portfolio.openMenu();
  }

 
  
    ngOnDestroy() {
      this.removeBodyClass();
    }

  closeMenu(){
    this.portfolio.closeMenu();
    this.removeBodyClass();
  }
  private removeBodyClass() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }

  
}


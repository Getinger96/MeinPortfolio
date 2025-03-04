import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { PorfolioService } from './../../porfolio.service';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule ,RouterLink,RouterOutlet],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  potfolio = inject(PorfolioService)
   constructor( private renderer: Renderer2,
      @Inject(DOCUMENT) private document: Document){
  
    }
    ngOnInit() {}
  
    ngOnDestroy() {
      this.removeBodyClass();
    }

   closeMenu(){
    this.removeBodyClass();
   
    this.potfolio.closeMenu();
    
  }
  private removeBodyClass() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  overlayVisible: boolean=false;
  languageEnglisch:boolean=false;
  languageGerman:boolean=true;
  constructor() { }

  

chooseGerman(){
  
  this.languageEnglisch=false;
  this.languageGerman=true;
  localStorage.setItem('language', 'german');
}

chooseEnglisch(){
  this.languageGerman=false;
  this.languageEnglisch=true;
  localStorage.setItem('language', 'english')
}
  openMenu(){
   
    this.overlayVisible=true
  }

  closeMenu(){
 
    this.overlayVisible=false;
  }


}

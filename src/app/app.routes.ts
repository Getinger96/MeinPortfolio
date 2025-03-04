import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { WhyMeComponent } from './main-content/why-me/why-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { MyProjectsComponent } from './main-content/my-projects/my-projects.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';





export const routes: Routes = [
    {path:'', component:MainContentComponent},
    {path:'imprint', component:ImpressumComponent},
    {path:'privacypolicy', component:DatenschutzComponent},
    
];


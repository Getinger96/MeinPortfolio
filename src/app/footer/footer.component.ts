import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AboveTheFoldComponent } from './../main-content/above-the-fold/above-the-fold.component';
import { PorfolioService } from '../porfolio.service';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  potfolio = inject(PorfolioService)
}

import { Component,inject } from '@angular/core';
import { PorfolioService } from './../../porfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  portfolio= inject(PorfolioService)
}

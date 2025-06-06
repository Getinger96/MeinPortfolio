import { Component,inject } from '@angular/core';
import { PorfolioService } from '.././../porfolio.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  portfolio= inject(PorfolioService)
}

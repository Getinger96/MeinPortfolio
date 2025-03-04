import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { PorfolioService } from '../../porfolio.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
portfolio= inject(PorfolioService)
showEllipse: boolean=false;
hover:boolean=false
}

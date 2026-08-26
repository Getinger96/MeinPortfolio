import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

@Component({
  selector: 'app-starfield',
  standalone: true,
  templateUrl: './starfield.component.html',
  styleUrl: './starfield.component.scss'
})
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Ungefähre Anzahl Pixel pro Stern. Kleinerer Wert = mehr Sterne. */
  @Input() density = 4000;

  /** Minimale und maximale Fallgeschwindigkeit pro Stern in px/Frame. */
  @Input() minSpeed = 0.05;
  @Input() maxSpeed = 0.35;

  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private animationFrameId = 0;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    this.ctx = context;

    this.resizeCanvas();
    this.createStars();
    this.animate();

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
      this.createStars();
    });
    this.resizeObserver.observe(canvas.parentElement ?? canvas);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.resizeObserver?.disconnect();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;

    const width = parent?.clientWidth ?? window.innerWidth;
    const height = parent?.clientHeight ?? window.innerHeight;

    // Für scharfe Darstellung auf High-DPI-Displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private createStars(): void {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    const count = Math.floor((width * height) / this.density);

    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      speed: Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed,
      opacity: Math.random() * 0.6 + 0.3
    }));
  }

  private animate = (): void => {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    this.ctx.clearRect(0, 0, width, height);

    for (const star of this.stars) {
      star.y += star.speed;
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
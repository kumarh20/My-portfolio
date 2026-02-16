import { 
  Component, 
  OnInit, 
  AfterViewInit,
  OnDestroy,
  HostListener, 
  ViewChild,
  ElementRef,
  signal, 
  inject 
} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeService } from './core/services/theme.service';
import { ScrollService } from './core/services/scroll.service';
import { routeTransition } from './core/animations/route.animation';
import gsap from 'gsap';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  animations: [routeTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('starCanvas', { static: false }) starCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('nebulaLayer', { static: false }) nebulaLayer?: ElementRef<HTMLDivElement>;

  private themeService = inject(ThemeService);
  private scrollService = inject(ScrollService);
  private router = inject(Router);
  
  private nebulaAnimation?: gsap.core.Tween;
  private animationFrameId?: number;
  private stars: Star[] = [];
  private ctx?: CanvasRenderingContext2D | null;
  private canvasWidth = 0;
  private canvasHeight = 0;
  
  scrollProgress = signal(0);
  title = 'my-portfolio';

  ngOnInit(): void {
    this.themeService;
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeStarField();
      this.initializeNebulaAnimation();
    }, 100);
  }

  ngOnDestroy(): void {
    this.nebulaAnimation?.kill();
    
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
    
    this.stars = [];
    this.ctx = null;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const progress = this.scrollService.getScrollProgress();
    this.scrollProgress.set(progress);
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (!this.starCanvas || !this.ctx) return;
    
    this.setupCanvas();
    this.createStars(); // Recreate stars with new dimensions
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  private initializeStarField(): void {
    if (!this.starCanvas) return;

    const canvas = this.starCanvas.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true });
    
    if (!this.ctx) return;
    
    this.setupCanvas();
    this.createStars();
    this.animateStars();
  }

  private setupCanvas(): void {
    if (!this.starCanvas) return;

    const canvas = this.starCanvas.nativeElement;
    const dpr = window.devicePixelRatio || 1;

    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;

    canvas.width = this.canvasWidth * dpr;
    canvas.height = this.canvasHeight * dpr;

    canvas.style.width = `${this.canvasWidth}px`;
    canvas.style.height = `${this.canvasHeight}px`;

    // Re-acquire context after canvas resize (context is lost on dimension change)
    this.ctx = canvas.getContext('2d', { alpha: true });
    
    if (this.ctx) {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(dpr, dpr);
    }
  }

  private createStars(): void {
    this.stars = [];

    for (let i = 0; i < 180; i++) {
      this.stars.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.15 + 0.05
      });
    }
  }

  private animateStars(): void {
    if (!this.ctx || !this.canvasWidth || !this.canvasHeight) return;

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      star.y += star.speed;
      star.x += star.speed * 0.3;

      if (star.y > this.canvasHeight) {
        star.y = 0;
        star.x = Math.random() * this.canvasWidth;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();
      this.ctx.closePath();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animateStars());
  }

  private initializeNebulaAnimation(): void {
    if (!this.nebulaLayer) return;

    this.nebulaAnimation = gsap.to(this.nebulaLayer.nativeElement, {
      backgroundPosition: '10% 10%',
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}

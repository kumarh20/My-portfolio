import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  OnDestroy, 
  ElementRef, 
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('textEntrance', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateX(-40px)' 
        }),
        animate('600ms ease-out', style({ 
          opacity: 1, 
          transform: 'translateX(0)' 
        }))
      ])
    ]),
    trigger('imageEntrance', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateX(40px)' 
        }),
        animate('700ms ease-out', style({ 
          opacity: 1, 
          transform: 'translateX(0)' 
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroBackground') heroBackground?: ElementRef<HTMLDivElement>;
  @ViewChild('profileCard') profileCard?: ElementRef<HTMLDivElement>;

  private backgroundAnimation?: gsap.core.Tween;
  private floatingAnimation?: gsap.core.Tween;

  readonly roleLabel = 'SENIOR FRONTEND DEVELOPER';
  readonly name = 'Hemant Kumar';
  readonly description = 'I am a determined software developer specializing in Angular, TypeScript, and modern web technologies. Currently working as Senior Frontend Developer at Interbiz Consulting. I craft beautiful, functional, and user-centered digital experiences that make a difference.';
  readonly profileImage = 'assets/images/hk.jpeg';

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.initializeBackgroundAnimation();
    this.initializeFloatingAnimation();
  }

  ngOnDestroy(): void {
    this.backgroundAnimation?.kill();
    this.floatingAnimation?.kill();
  }

  private initializeBackgroundAnimation(): void {
    if (!this.heroBackground) return;

    this.backgroundAnimation = gsap.to(this.heroBackground.nativeElement, {
      backgroundPosition: '100% 50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });
  }

  private initializeFloatingAnimation(): void {
    if (!this.profileCard) return;

    this.floatingAnimation = gsap.to(this.profileCard.nativeElement, {
      y: -18,
      duration: 6,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    });
  }

  onViewProjects(): void {
    window.location.href = '/projects';
  }

  onContactMe(): void {
    window.location.href = '/contact';
  }
}

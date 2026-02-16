import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Project } from '../../core/models/project.model';
import { listAnimation } from '../../core/animations/stagger.animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent],
  animations: [listAnimation],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  projects: Project[] = [
    {
      id: '1',
      title: 'Harvester Tracker',
      description: 'A comprehensive harvester tracking system for monitoring and managing agricultural equipment in real-time. Features include location tracking, performance analytics, and maintenance scheduling.',
      image: 'assets/images/hk3.jpeg',
      techStack: ['Angular', 'TypeScript', 'Firebase', 'Google Maps API'],
      githubUrl: 'https://github.com/hemantkumar',
      liveUrl: '',
      featured: true
    },
    {
      id: '2',
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and responsive design. Built with modern web technologies for seamless communication.',
      image: 'assets/images/hk4.jpeg',
      techStack: ['Angular', 'Firebase', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/hemantkumar/chat-app',
      liveUrl: '',
      featured: true
    },
    {
      id: '3',
      title: 'My Portfolio',
      description: 'Personal portfolio website showcasing my projects, skills, and experience. Built with Angular 17+ using standalone components, GSAP animations, and modern design principles.',
      image: 'assets/images/hk5.jpeg',
      techStack: ['Angular 17', 'TypeScript', 'SCSS', 'GSAP'],
      githubUrl: 'https://github.com/hemantkumar/my-portfolio',
      liveUrl: 'http://localhost:4203',
      featured: true
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      this.initializeScrollAnimations();
      ScrollTrigger.refresh();
    }, 100);
  }

  ngOnDestroy(): void {
    // Kill all ScrollTrigger instances for this component
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private initializeScrollAnimations(): void {
    // Stagger animation for project cards
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

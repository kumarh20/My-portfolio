import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { fadeInUp } from '../../core/animations/fade-in.animation';
import { listAnimation } from '../../core/animations/stagger.animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent],
  animations: [fadeInUp, listAnimation],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  profileImage = 'assets/images/hk2.jpeg';
  
  bio = {
    title: 'About Me',
    paragraphs: [
      'I am a determined and knowledgeable software developer who can think outside the box. With expertise in creating modern, responsive web applications using Angular, TypeScript, and C#, I bring ideas to life through clean code and intuitive design.',
      'My journey in software development started with my MCA degree from CSVTU, followed by an internship at Digital Shakha. Since November 2022, I have been working with Interbiz Consulting, where I completed 6 months of training and was confirmed as a Senior Frontend Developer.',
      'I specialize in Angular development, Firebase integration, and have debugging-level knowledge of C# and backend technologies. My project ranked first in a competition for an evolving company in the USA, where I was a key team member. When I\'m not coding, you can find me playing cricket, reading books, or exploring new technologies.'
    ]
  };

  experiences: Experience[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Interbiz Consulting Pvt Ltd',
      period: 'November 2022 - Present',
      description: 'Leading frontend development using Angular, TypeScript, and modern web technologies. Completed 6 months of intensive training and confirmed as Senior Frontend Developer. Working on enterprise-level applications with state management, Firebase integration, and C# backend debugging.'
    },
    {
      title: 'Software Development Intern',
      company: 'Digital Shakha',
      period: 'June 2022 - September 2022',
      description: 'Gained hands-on experience in web development using Angular, HTML, CSS, JavaScript, and PHP. Worked on real-world projects and developed well-tested code for different software applications. Based in Bhilai, Chhattisgarh.'
    }
  ];

  education: Education[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'CSVTU (Chhattisgarh Swami Vivekanand Technical University)',
      period: '2020 - 2022',
      description: 'Graduated with 80.00% marks. Specialized in software engineering, web technologies, and database management.'
    },
    {
      degree: 'Bachelor of Science in Computer Science (BSc CS)',
      institution: 'Durg University',
      period: '2017 - 2020',
      description: 'Graduated with 72.16% marks. Strong foundation in computer science fundamentals, programming, and algorithms.'
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'CGBSE (Chhattisgarh Board of Secondary Education)',
      period: '2017',
      description: 'Completed with 74.80% marks.'
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'CGBSE (Chhattisgarh Board of Secondary Education)',
      period: '2015',
      description: 'Completed with 83.16% marks.'
    }
  ];

  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '3+', label: 'Projects Completed' },
    { value: 'MCA', label: 'Highest Degree' },
    { value: '10+', label: 'Technologies' }
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
    // Animate sections on scroll
    gsap.fromTo('.about-image-wrapper',
      {
        opacity: 0,
        x: -50
      },
      {
        scrollTrigger: {
          trigger: '.about-image-wrapper',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    );

    gsap.fromTo('.about-bio',
      {
        opacity: 0,
        x: 50
      },
      {
        scrollTrigger: {
          trigger: '.about-bio',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    );

    gsap.fromTo('.stat-card', 
      {
        opacity: 0,
        y: 30
      },
      {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          once: true
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  }

  downloadCV(): void {
    // Implement CV download logic
    console.log('Downloading CV...');
  }
}

import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SkillCategory } from '../../core/models/skill.model';
import { listAnimation } from '../../core/animations/stagger.animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  animations: [listAnimation],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 95, category: 'frontend', icon: '🅰️' },
        { name: 'TypeScript', level: 92, category: 'frontend', icon: '📘' },
        { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
        { name: 'HTML', level: 98, category: 'frontend', icon: '🎨' },
        { name: 'CSS', level: 95, category: 'frontend', icon: '🎨' },
        { name: 'SCSS/Sass', level: 90, category: 'frontend', icon: '💅' },
        { name: 'Bootstrap', level: 88, category: 'frontend', icon: '🅱️' },
        { name: 'State Management (Redux)', level: 85, category: 'frontend', icon: '🔄' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'C# (Debugging)', level: 75, category: 'backend', icon: '🔷' },
        { name: 'PHP', level: 82, category: 'backend', icon: '🐘' },
        { name: 'Firebase', level: 88, category: 'backend', icon: '🔥' },
        { name: 'MySQL', level: 90, category: 'backend', icon: '🗄️' },
        { name: 'Database Queries', level: 92, category: 'backend', icon: '💾' },
        { name: 'Backend Debugging', level: 80, category: 'backend', icon: '🐛' },
        { name: 'REST APIs', level: 85, category: 'backend', icon: '🔌' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, category: 'tools', icon: '📚' },
        { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
        { name: 'Figma', level: 80, category: 'tools', icon: '🎨' },
        { name: 'HackerRank Certified', level: 100, category: 'tools', icon: '🏆' },
        { name: 'Agile/Scrum', level: 85, category: 'tools', icon: '📋' },
        { name: 'Problem Solving', level: 92, category: 'tools', icon: '🧩' }
      ]
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
    // Animate skill categories
    this.skillCategories.forEach((category, index) => {
      gsap.from(`.skill-category:nth-child(${index + 1})`, {
        scrollTrigger: {
          trigger: `.skill-category:nth-child(${index + 1})`,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.out'
      });

      // Animate progress bars
      gsap.from(`.skill-category:nth-child(${index + 1}) .skill-progress-fill`, {
        scrollTrigger: {
          trigger: `.skill-category:nth-child(${index + 1})`,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        width: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.1
      });

      // Animate percentage numbers
      gsap.from(`.skill-category:nth-child(${index + 1}) .skill-percentage`, {
        scrollTrigger: {
          trigger: `.skill-category:nth-child(${index + 1})`,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        textContent: 0,
        duration: 1.2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.1
      });
    });
  }

  getSkillsByCategory(category: 'frontend' | 'backend' | 'tools'): SkillCategory | undefined {
    return this.skillCategories.find(cat => cat.skills[0]?.category === category);
  }
}

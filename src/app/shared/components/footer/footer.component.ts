import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../../core/animations/fade-in.animation';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/hemantkumar',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hemantkumar',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hemantkumar',
      icon: 'twitter'
    },
    {
      name: 'Email',
      url: 'mailto:hemantkumarskh@gmail.com',
      icon: 'email'
    }
  ];

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      github: '⚡',
      linkedin: '💼',
      twitter: '🐦',
      email: '✉️'
    };
    return icons[icon] || '🔗';
  }
}

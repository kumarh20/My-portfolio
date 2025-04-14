import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal website built with Angular and Material.',
      tech: ['Angular', 'Material', 'SCSS'],
      liveUrl: 'https://your-live-site.com',
      repoUrl: 'https://github.com/your-name/portfolio'
    },
    {
      title: 'Inventory App',
      description: 'A mobile-friendly inventory management SPA.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '',
      repoUrl: 'https://github.com/your-name/inventory-app'
    },
    {
      title: 'Chat App',
      description: 'A chat application built with Angular and Firebase.',
      tech: ['Angular', 'Firebase', 'RxJS'],
      liveUrl: 'https://your-chat-app.com',
      repoUrl: 'https://github.com/your-name/chat-app'
    }
  ];
}

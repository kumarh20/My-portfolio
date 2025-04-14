import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [CommonModule, MaterialModule, RouterModule, HeaderComponent, FooterComponent]
,
  template: `
  <app-header></app-header>
  <main class="main-content">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
  `,
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}

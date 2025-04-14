import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggle();
  }
  get themeIcon(): string {
    return this.theme.isDark() ? 'light_mode' : 'dark_mode';
  }
}


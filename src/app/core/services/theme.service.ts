import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Dark theme only as per requirements
  private darkMode = signal(true);
  
  isDark = this.darkMode.asReadonly();

  constructor() {
    // Always apply dark theme
    effect(() => {
      if (this.darkMode()) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    });
  }

  // For future use if toggle is needed
  toggle(): void {
    this.darkMode.update(value => !value);
  }
}

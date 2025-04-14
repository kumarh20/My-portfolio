import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'portfolio-theme';

  constructor() {
    const saved = localStorage.getItem(this.key);
    if (saved === 'dark') this.setDark();
    else this.setLight();
  }

  toggle() {
    this.isDark() ? this.setLight() : this.setDark();
  }

  setDark() {
    document.body.classList.add('dark-theme');
    localStorage.setItem(this.key, 'dark');
  }

  setLight() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem(this.key, 'light');
  }

  isDark(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

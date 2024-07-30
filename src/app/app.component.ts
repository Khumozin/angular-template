import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SHELL } from './core/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHELL, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}

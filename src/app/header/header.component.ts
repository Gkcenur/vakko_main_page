import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false;
  searchActive = false;
  submenuActive: string | null = null;  // Holds the active submenu

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  toggleSubmenu(menu: string) {
    if (this.submenuActive === menu) {
      this.submenuActive = null;
    } else {
      this.submenuActive = menu;
    }
  }
}

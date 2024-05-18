import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuickUpdateComponent } from '../quick-update/quick-update.component';
import { CarInfoComponent } from '../car-info/car-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    QuickUpdateComponent,
    CarInfoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  menuWatcher = false;

  toggleMenu() {
    this.menuWatcher = !this.menuWatcher;
  }

  navigate(endpoint: string) {
    this.router.navigateByUrl(`/${endpoint}`);
  }
}

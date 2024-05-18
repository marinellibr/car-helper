import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private route: Router) {}

  @Output() newMenuStatus = new EventEmitter<boolean>();

  navigate(endpoint: string) {
    this.newMenuStatus.emit(false);
    this.route.navigateByUrl(`/${endpoint}`);
  }
}

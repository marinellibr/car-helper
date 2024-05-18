import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-quick-update',
  standalone: true,
  imports: [],
  templateUrl: './quick-update.component.html',
  styleUrl: './quick-update.component.scss',
})
export class QuickUpdateComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl('update-mileage');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-info',
  standalone: true,
  imports: [],
  templateUrl: './car-info.component.html',
  styleUrl: './car-info.component.scss',
})
export class CarInfoComponent implements OnInit {
  constructor(private router: Router) {}
  selected: any;

  ngOnInit(): void {
    this.selected = JSON.parse(window.localStorage.getItem('selectedVehicle')!);
  }

  navigate(endpoint: string) {
    this.router.navigateByUrl(`/${endpoint}`);
  }
}

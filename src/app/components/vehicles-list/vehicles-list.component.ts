import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
})
export class VehiclesListComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  vehicles: any;
  selected: any;

  ngOnInit(): void {
    this.vehicles = JSON.parse(window.localStorage.getItem('allVehicles')!);
    this.selected = JSON.parse(window.localStorage.getItem('selectedVehicle')!);
  }

  updateSelected(index: number) {
    window.localStorage.removeItem('selectedVehicle');
    window.localStorage.setItem(
      'selectedVehicle',
      JSON.stringify(this.vehicles[index])
    );
    this.selected = this.vehicles[index];
    this.location.back();
  }
}

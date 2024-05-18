import { Component } from '@angular/core';
import { CarInfoComponent } from '../../shared/car-info/car-info.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mileage-form',
  standalone: true,
  imports: [CarInfoComponent, FormsModule],
  templateUrl: './mileage-form.component.html',
  styleUrl: './mileage-form.component.scss',
})
export class MileageFormComponent {
  constructor(private router: Router) {}
  vehicle: any;
  mileage: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.vehicle = JSON.parse(window.localStorage.getItem('selectedVehicle')!);
    this.mileage = this.vehicle.mileage;
  }

  update() {
    const diff = this.mileage - this.vehicle.mileage;
    this.vehicle.mileage = this.mileage;

    this.vehicle.metrics.forEach((element: any) => {
      element.currentMileage += diff;
    });

    this.updateAllVehicles();
  }

  updateAllVehicles() {
    const vehicles = JSON.parse(window.localStorage.getItem('allVehicles')!);
    const index = vehicles
      .map((e: any) => e.licensePlate)
      .indexOf(this.vehicle.licensePlate);
    vehicles[index] = this.vehicle;

    window.localStorage.removeItem('allVehicles');
    window.localStorage.setItem('allVehicles', JSON.stringify(vehicles));

    window.localStorage.removeItem('selectedVehicle');
    window.localStorage.setItem(
      'selectedVehicle',
      JSON.stringify(this.vehicle)
    );

    this.router.navigateByUrl('');
  }
}

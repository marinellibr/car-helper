import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MetricCardComponent } from '../shared/metric-card/metric-card.component';
import { CommonModule } from '@angular/common';
import { CarInfoComponent } from '../shared/car-info/car-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MetricCardComponent,
    CommonModule,
    CarInfoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  metrics: any[] = [];

  ngOnInit(): void {
    this.metrics = JSON.parse(
      window.localStorage.getItem('selectedVehicle')!
    ).metrics;

    this.metrics = this.metrics.filter((value) => value.liked);
  }
}

import { Component, OnInit } from '@angular/core';
import { MetricCardComponent } from '../shared/metric-card/metric-card.component';
import { CommonModule } from '@angular/common';
import { CarInfoComponent } from '../shared/car-info/car-info.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MetricCardComponent, CommonModule, CarInfoComponent],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss',
})
export class MetricsComponent implements OnInit {
  metrics: any;

  ngOnInit(): void {
    this.metrics = JSON.parse(
      window.localStorage.getItem('selectedVehicle')!
    ).metrics;
    this.order();
  }

  order() {
    this.metrics = this.metrics.sort(
      (a: any, b: any) => Number(b.liked) - Number(a.liked)
    );
  }
}

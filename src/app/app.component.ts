import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import renegade from '../assets/mocks/renegade.json';
import porsche from '../assets/mocks/911.json';
import rs6 from '../assets/mocks/rs6.json';
import { QuickUpdateComponent } from './components/shared/quick-update/quick-update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HomeComponent,
    CommonModule,
    HeaderComponent,
    QuickUpdateComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'car-helper';

  ngOnInit(): void {
    window.localStorage.setItem('selectedVehicle', JSON.stringify(renegade));
    window.localStorage.setItem('allVehicles', this.compileVehicles());
  }

  compileVehicles(): string {
    const vehicles = [renegade, porsche, rs6];
    return JSON.stringify(vehicles);
  }
}

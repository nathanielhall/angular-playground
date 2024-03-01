import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CountryModule } from '../country/country.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSlideToggleModule, 
    CountryModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

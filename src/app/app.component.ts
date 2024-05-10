import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendorsComponent } from './components/vendors/vendors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VendorCityFilter';
}

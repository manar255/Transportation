import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../views/Home/home.component';
import { FooterComponent } from './../views/footer/footer.component';
import { HeaderComponent } from './../views/header/header.component';
import { OurFleetComponent } from '../views/our-fleet/our-fleet.component';
import { ContactComponent } from '../views/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, HeaderComponent,OurFleetComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transportation';
}

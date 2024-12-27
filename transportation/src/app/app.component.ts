import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../views/Home/home.component';
import { FooterComponent } from './../views/footer/footer.component';
import { HeaderComponent } from './../views/header/header.component';
import { OurFleetComponent } from '../views/our-fleet/our-fleet.component';
import { ContactComponent } from '../views/contact/contact.component';
import { AboutComponent } from '../views/about/about.component';
import { FaqComponent } from '../views/faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, HeaderComponent,OurFleetComponent,ContactComponent,AboutComponent,FaqComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transportation';
}

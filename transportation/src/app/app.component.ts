import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './../views/Home/components/hero-section/hero-section.component';
import { FeatureSectionComponent } from '../views/Home/components/feature-section/feature-section.component';
import { OptionSectionComponent } from '../views/Home/components/option-section/option-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroSectionComponent,FeatureSectionComponent,OptionSectionComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transportation';
}

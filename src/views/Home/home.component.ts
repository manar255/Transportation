import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { OptionSectionComponent } from './components/option-section/option-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[HeroSectionComponent,FeatureSectionComponent,OptionSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

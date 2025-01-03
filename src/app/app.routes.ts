import { Routes } from '@angular/router';
import { HomeComponent } from '../views/Home/home.component';
import { OurFleetComponent } from '../views/our-fleet/our-fleet.component';
import { ContactComponent } from '../views/contact/contact.component';
import { AboutComponent } from '../views/about/about.component';
import { FaqComponent } from '../views/faq/faq.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'fleet',component:OurFleetComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'faq',component:FaqComponent},
];

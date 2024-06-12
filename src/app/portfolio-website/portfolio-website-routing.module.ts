import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  {path : 'navbar',component:NavbarComponent},
  {path : 'home',component:HomeComponent},
  {path : 'about',component:AboutComponent},
  {path : 'footer',component:FooterComponent},
  {path : 'contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }

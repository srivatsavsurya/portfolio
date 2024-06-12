import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : 'portfolio-website', loadChildren: () => import('./portfolio-website/portfolio-website-routing.module').then(m => m.PortfolioWebsiteRoutingModule)}
];

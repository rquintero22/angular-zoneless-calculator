import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () => import('@/calculator/views/calculator-view.component')
  },

  {
    path: "**",
    redirectTo: "calculator"
  }
];

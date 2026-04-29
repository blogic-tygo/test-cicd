import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
    },
    {
        path: "category",
        loadComponent: () => import('./pages/category/category').then(m => m.CategoryComponent)
    },
    {
        path: "product",
        loadComponent: () => import('./pages/product/product').then(m => m.ProductComponent)
    }
];

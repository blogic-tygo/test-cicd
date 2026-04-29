import { Component, isDevMode, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './product.html',
})
export class ProductComponent {
  protected readonly title = signal('hero-app');

  protected readonly isDevMode = isDevMode();
}

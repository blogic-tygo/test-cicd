import { Component, isDevMode, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './category.html',
})
export class CategoryComponent {
  protected readonly title = signal('hero-app');

  protected readonly isDevMode = isDevMode();
}

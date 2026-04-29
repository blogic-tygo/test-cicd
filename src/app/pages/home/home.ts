import { Component, isDevMode, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  protected readonly title = signal('hero-app');

  protected readonly isDevMode = isDevMode();
}

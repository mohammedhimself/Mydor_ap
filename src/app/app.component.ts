import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);
      } else if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });
  }
}

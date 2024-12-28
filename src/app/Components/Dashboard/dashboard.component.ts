import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { RouterModule, } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [RouterModule,CommonModule]
})
export class DashboardComponent implements OnInit {
  showUploadPopup = false; // Used to toggle the popup
  user: any; // Holds the user data

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check for authenticated user in localStorage
    this.user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!this.user || !this.user.authenticated) {
      console.warn('No authenticated user found. Redirecting to login page.');
      this.router.navigate(['/login']);
    }
  }

  toggleUploadPopup(): void {
    // Toggle the popup's visibility
    this.showUploadPopup = !this.showUploadPopup;
  }

  closeUploadPopup(): void {
    // Close the popup
    this.showUploadPopup = false;
  }

  navigateToUpload(): void {
    // Navigate to the Upload page
    this.router.navigate(['/dashboard/upload']);
  }

  logout(): void {
    // Log out the user
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

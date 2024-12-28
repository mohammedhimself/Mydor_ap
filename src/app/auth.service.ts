import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  

  /**

   * @param email - The user's email.
   * @param password - The user's password.
   * @returns boolean - True if login is successful, false otherwise.
   */
  login(email: string, password: string): boolean {
    if (email === 'mamman.mohammed' && password === 'password123') {
      const user = { email, authenticated: true };
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
      }
      return true;
    }
    return false;
  }

  
  logout(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('user'); 
    }
    this.router.navigate(['/login']);
  }

  
  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      const user = localStorage.getItem('user');
      return user !== null && JSON.parse(user).authenticated === true;
    }
    return false;
  }

  
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.email, this.password)) {
      console.log('Login successful, navigating to dashboard...');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password!');
    }
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';  // For ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,
    FormsModule,        // <-- Needed for [(ngModel)]
    MatFormFieldModule, // <-- Needed for <mat-form-field>
    MatInputModule,     // <-- Needed for <input matInput>
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;
  username = '';
  password = '';

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  onLogin() {
    if (!this.username || !this.password) {
      this.snackBar.open('Please enter both username and password', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    // Simulated authentication logic
    if (this.username === 'admin' && this.password === 'admin123') {
      // this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
      this.router.navigate(['/dashboard'])
    } else {
      this.snackBar.open('Invalid credentials', 'Close', { duration: 3000 });
    }
  }
}

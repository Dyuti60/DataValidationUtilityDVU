import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';  // For ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-db-connection',
  standalone: true,
  imports: [MatCardModule,
    FormsModule,        // <-- Needed for [(ngModel)]
    MatFormFieldModule, // <-- Needed for <mat-form-field>
    MatInputModule,     // <-- Needed for <input matInput>
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './single-db-connection.component.html',
  styleUrl: './single-db-connection.component.scss'
})
export class SingleDbConnectionComponent {
  dbTypes = ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'SQLite'];

  connection = {
    type: '',
    host: '',
    port: '',
    username: '',
    password: '',
    dbName: ''
  };

  constructor(private snackBar: MatSnackBar) {}

  testConnection() {
    if (!this.connection.type || !this.connection.host || !this.connection.username) {
      this.snackBar.open('Please fill all required fields', 'Close', { duration: 3000 });
      return;
    }

    // Simulated test connection
    setTimeout(() => {
      this.snackBar.open('Connection Successful ✅', 'Close', { duration: 3000 });
    }, 1000);
  }

  saveConnection() {
    this.snackBar.open('Connection Saved 💾', 'Close', { duration: 3000 });
  }
}

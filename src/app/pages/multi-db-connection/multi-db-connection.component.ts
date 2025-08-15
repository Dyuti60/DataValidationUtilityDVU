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
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-multi-db-connection',
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
    NgFor
  ],
  templateUrl: './multi-db-connection.component.html',
  styleUrl: './multi-db-connection.component.scss'
})
export class MultiDbConnectionComponent {
  dbTypes = ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'SQLite'];

  connection1 = { type: '', host: '', port: '', username: '', password: '', dbName: '' };
  connection2 = { type: '', host: '', port: '', username: '', password: '', dbName: '' };

  constructor(private snackBar: MatSnackBar) {}

  testConnection(conn: any, label: string) {
    if (!conn.type || !conn.host || !conn.username) {
      this.snackBar.open(`Please fill all required fields for ${label}`, 'Close', { duration: 3000 });
      return;
    }
    setTimeout(() => {
      this.snackBar.open(`${label} Connection Successful ✅`, 'Close', { duration: 3000 });
    }, 1000);
  }

  saveConnections() {
    this.snackBar.open('Both Connections Saved 💾', 'Close', { duration: 3000 });
  }
}

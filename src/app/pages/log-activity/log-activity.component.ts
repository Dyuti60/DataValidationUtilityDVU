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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DatePipe, NgClass, NgFor } from '@angular/common';

interface LogEntry {
  timestamp: Date;
  type: 'Info' | 'Warning' | 'Error';
  message: string;
}

@Component({
  selector: 'app-log-activity',
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
    MatTableModule,
    NgClass,
    DatePipe,
    NgFor,
    MatSnackBarModule
  ],
  templateUrl: './log-activity.component.html',
  styleUrl: './log-activity.component.scss'
})
export class LogsActivityComponent {
  logs: LogEntry[] = [
    { timestamp: new Date(), type: 'Info', message: 'Connected to MySQL Server at 192.168.1.10' },
    { timestamp: new Date(), type: 'Error', message: 'Failed to execute query: Syntax error near "WHERE"' },
    { timestamp: new Date(), type: 'Warning', message: 'Slow query detected (5.4s execution time)' }
  ];

  logTypes = ['All', 'Info', 'Warning', 'Error'];
  selectedType = 'All';

  filterLogs(): LogEntry[] {
    if (this.selectedType === 'All') {
      return this.logs;
    }
    return this.logs.filter(log => log.type === this.selectedType);
  }

  clearLogs() {
    this.logs = [];
  }
}
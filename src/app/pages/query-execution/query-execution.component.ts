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
import { MatTableModule } from '@angular/material/table';
import { DecimalPipe, NgIf } from '@angular/common';

interface QueryResult {
  columns: string[];
  rows: Record<string, any>[];
}

@Component({
  selector: 'app-query-execution',
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
    DecimalPipe,
    NgIf
    
  ],
  templateUrl: './query-execution.component.html',
  styleUrl: './query-execution.component.scss'
})


export class QueryExecutionComponent {
  connectedDbs = ['MySQL_DB1', 'Postgres_DB2', 'Oracle_DB3']; // placeholder - fetch from service later
  selectedDb: string = '';
  sqlQuery: string = '';
  queryResult: QueryResult | null = null;
  loading = false;
  executionTime = 0;

  constructor(private snackBar: MatSnackBar) {}

  runQuery() {
    if (!this.selectedDb || !this.sqlQuery.trim()) {
      this.snackBar.open('Please select a database and enter a query', 'Close', { duration: 3000 });
      return;
    }

    this.loading = true;
    const startTime = performance.now();

    // Simulate API call
    setTimeout(() => {
      // Dummy data
      this.queryResult = {
        columns: ['ID', 'Name', 'Email'],
        rows: [
          [1, 'John Doe', 'john@example.com'],
          [2, 'Jane Smith', 'jane@example.com']
        ]
      };

      const endTime = performance.now();
      this.executionTime = endTime - startTime;
      this.loading = false;

      this.snackBar.open(`Query executed successfully`, 'Close', { duration: 2000 });
    }, 1500);
  }
}

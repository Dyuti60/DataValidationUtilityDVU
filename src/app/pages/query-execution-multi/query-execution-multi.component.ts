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
import { DecimalPipe, NgClass, NgIf } from '@angular/common';

interface QueryResult {
  dbName: string;
  columns: string[];
  rows: any[][];
  executionTime: number;
  error?: string;
}

@Component({
  selector: 'app-query-execution-multi',
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
    NgClass,
    NgIf
  ],
  templateUrl: './query-execution-multi.component.html',
  styleUrl: './query-execution-multi.component.scss'
})


export class QueryExecutionMultiComponent {
  connectedDbs = ['MySQL_DB1', 'Postgres_DB2', 'Oracle_DB3', 'SQLServer_DB4']; // placeholder
  selectedDbs: string[] = [];
  sqlQuery: string = '';
  queryResults: QueryResult[] = [];
  loading = false;

  constructor(private snackBar: MatSnackBar) {}

  runQueryOnMultiple() {
    if (!this.selectedDbs.length || !this.sqlQuery.trim()) {
      this.snackBar.open('Please select at least one database and enter a query', 'Close', { duration: 3000 });
      return;
    }

    this.loading = true;
    this.queryResults = [];

    const simulatedPromises = this.selectedDbs.map(db => {
      const startTime = performance.now();

      return new Promise<QueryResult>((resolve) => {
        setTimeout(() => {
          // Simulate a DB error randomly
          if (Math.random() < 0.2) {
            resolve({
              dbName: db,
              columns: [],
              rows: [],
              executionTime: performance.now() - startTime,
              error: 'Simulated connection error'
            });
          } else {
            resolve({
              dbName: db,
              columns: ['ID', 'Name', 'Email'],
              rows: [
                [1, `User from ${db}`, `${db.toLowerCase()}@example.com`],
                [2, `Another from ${db}`, `another_${db.toLowerCase()}@example.com`]
              ],
              executionTime: performance.now() - startTime
            });
          }
        }, Math.random() * 2000 + 500);
      });
    });

    Promise.all(simulatedPromises).then(results => {
      this.queryResults = results;
      this.loading = false;
      this.snackBar.open('Queries executed on selected databases', 'Close', { duration: 2000 });
    });
  }
}
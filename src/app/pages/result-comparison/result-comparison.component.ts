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
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
interface ResultRow {
  column: string;
  db1Value: string;
  db2Value: string;
  isDifferent: boolean;
}

@Component({
  selector: 'app-result-comparison',
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
    MatSnackBarModule
  ],
  templateUrl: './result-comparison.component.html',
  styleUrl: './result-comparison.component.scss'
})
export class ResultComparisonComponent {

  displayedColumns: string[] = ['column', 'db1Value', 'db2Value'];
  dataSource = new MatTableDataSource<ResultRow>([]);

  constructor() {
    // Dummy data
    const mockData: ResultRow[] = [
      { column: 'Name', db1Value: 'John', db2Value: 'John', isDifferent: false },
      { column: 'Age', db1Value: '30', db2Value: '32', isDifferent: true },
      { column: 'Country', db1Value: 'USA', db2Value: 'USA', isDifferent: false }
    ];
    this.dataSource.data = mockData;
  }

  applyHighlight(row: ResultRow): string {
    return row.isDifferent ? 'highlight-diff' : '';
  }
}
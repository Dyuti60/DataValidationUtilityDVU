import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe, NgClass, SlicePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

interface QueryHistoryItem {
  id: number;
  query: string;
  dbs: string[];
  executionTime: number;
  timestamp: Date;
  status: 'Success' | 'Failed';
}

@Component({
  selector: 'app-query-history',
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
    MatExpansionModule,
    MatSnackBarModule,
    NgClass,
    DecimalPipe,
    DatePipe,
    SlicePipe
  ],
  templateUrl: './query-history.component.html',
  styleUrl: './query-history.component.scss'
})

export class QueryHistoryComponent implements OnInit {
  displayedColumns: string[] = ['query', 'dbs', 'timestamp', 'executionTime', 'status', 'actions'];
  dataSource = new MatTableDataSource<QueryHistoryItem>([]);
  searchTerm = '';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    // Load from localStorage (or API later)
    const savedHistory = localStorage.getItem('queryHistory');
    if (savedHistory) {
      this.dataSource.data = JSON.parse(savedHistory).map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp)
      }));
    }
  }

  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  clearHistory() {
    localStorage.removeItem('queryHistory');
    this.dataSource.data = [];
    this.snackBar.open('Query history cleared', 'Close', { duration: 2000 });
  }

  rerunQuery(item: QueryHistoryItem) {
    this.snackBar.open(`Re-running query on ${item.dbs.join(', ')}`, 'Close', { duration: 2000 });
    // TODO: Hook with Query Execution component
  }

  deleteEntry(item: QueryHistoryItem) {
    this.dataSource.data = this.dataSource.data.filter(q => q.id !== item.id);
    localStorage.setItem('queryHistory', JSON.stringify(this.dataSource.data));
    this.snackBar.open('Entry deleted', 'Close', { duration: 2000 });
  }
}

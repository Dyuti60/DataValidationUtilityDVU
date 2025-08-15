import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';  // For ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatChip } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DatePipe, NgFor } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
interface SavedQuery {
  id: number;
  name: string;
  description: string;
  query: string;
  dbs: string[];
  tags: string[];
  createdAt: Date;
}

@Component({
  selector: 'app-saved-queries',
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
    MatChipsModule,
    MatChip,
    DatePipe,
    MatSnackBarModule,
    NgFor
  ],
  templateUrl: './saved-queries.component.html',
  styleUrl: './saved-queries.component.scss'
})
export class SavedQueriesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'dbs', 'tags', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<SavedQuery>([]);
  searchTerm = '';
  
  // Form fields
  newName = '';
  newDescription = '';
  newQuery = '';
  newDbs = '';
  newTags = '';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    const saved = localStorage.getItem('savedQueries');
    if (saved) {
      this.dataSource.data = JSON.parse(saved).map((q: any) => ({
        ...q,
        createdAt: new Date(q.createdAt)
      }));
    }
  }

  saveQuery() {
    if (!this.newName.trim() || !this.newQuery.trim()) {
      this.snackBar.open('Name and Query are required', 'Close', { duration: 2000 });
      return;
    }

    const newEntry: SavedQuery = {
      id: Date.now(),
      name: this.newName.trim(),
      description: this.newDescription.trim(),
      query: this.newQuery.trim(),
      dbs: this.newDbs.split(',').map(db => db.trim()).filter(Boolean),
      tags: this.newTags.split(',').map(tag => tag.trim()).filter(Boolean),
      createdAt: new Date()
    };

    this.dataSource.data = [...this.dataSource.data, newEntry];
    localStorage.setItem('savedQueries', JSON.stringify(this.dataSource.data));

    // Reset form
    this.newName = '';
    this.newDescription = '';
    this.newQuery = '';
    this.newDbs = '';
    this.newTags = '';

    this.snackBar.open('Query saved successfully', 'Close', { duration: 2000 });
  }

  deleteQuery(item: SavedQuery) {
    this.dataSource.data = this.dataSource.data.filter(q => q.id !== item.id);
    localStorage.setItem('savedQueries', JSON.stringify(this.dataSource.data));
    this.snackBar.open('Query deleted', 'Close', { duration: 2000 });
  }

  runQuery(item: SavedQuery) {
    this.snackBar.open(`Running saved query "${item.name}"`, 'Close', { duration: 2000 });
    // TODO: Hook into Query Execution module
  }

  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }
}
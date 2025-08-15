import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
import { ReactiveFormsModule } from '@angular/forms';

interface User {
  username: string;
  role: string;
}


@Component({
  selector: 'app-admin-settings',
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
    ReactiveFormsModule
  ],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss'
})
export class AdminSettingsComponent {
  users: User[] = [
    { username: 'admin', role: 'Admin' },
    { username: 'tester', role: 'Tester' }
  ];

  roles = ['Admin', 'Tester', 'Viewer'];

  userForm: FormGroup;
  connectionDefaultsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: [''],
      role: ['']
    });

    this.connectionDefaultsForm = this.fb.group({
      defaultHost: ['localhost'],
      defaultPort: ['3306'],
      defaultDBType: ['MySQL']
    });
  }

  addUser() {
    const newUser: User = this.userForm.value;
    this.users.push(newUser);
    this.userForm.reset();
  }

  removeUser(username: string) {
    this.users = this.users.filter(user => user.username !== username);
  }

  saveDefaults() {
    console.log('Saved Defaults:', this.connectionDefaultsForm.value);
    alert('Default settings saved!');
  }
}
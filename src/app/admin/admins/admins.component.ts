import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { generateClient, SelectionSet } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
// Remove the import statement for 'Nullable'

// const selectionSet = ['id', 'email', 'username'] as const;
// type Administrator = SelectionSet<Schema['Administrator']['type'], typeof selectionSet>;

type Administrator = {
  id: string | null;
  email: string | null;
  username: string | null;
}
@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent implements OnInit {

  administrators: Administrator[] = [];

  adminForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  async ngOnInit(): Promise<void> {

    const client = generateClient<Schema>();
    const { data: administrators, errors } = await client.models.Administrator.list();
    this.administrators = administrators;
  }

  async createAdministrator() {
    const client = generateClient<Schema>();
    const { data: newAdministrator, errors } = await client.models.Administrator.create(this.adminForm.value);

    if (errors) {
      console.error(errors);
      return;
    } else {
      if (newAdministrator !== null) {
        this.administrators.push({
          id: newAdministrator.id!,
          email: newAdministrator.email!,
          username: newAdministrator.username!
        });
      }
    }
  }

  async deleteAdministrator(administrator: any) {
    const client = generateClient<Schema>();
    const { data: deletedAdministor, errors } = await client.models.Administrator.delete(administrator);
    this.administrators = this.administrators.filter((a) => a !== administrator);
  }
}



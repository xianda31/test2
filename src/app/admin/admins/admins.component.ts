import { Component, OnInit } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent implements OnInit {

  adminForm: FormGroup = new FormGroup({
    email: new FormControl('john.do@bcsto.fr', Validators.required),
    username: new FormControl('john', Validators.required)
  });

  async ngOnInit(): Promise<void> {
    console.log("admins ==> ");
    const client = generateClient<Schema>();
    const result = await client.models.Administrator.list();
    console.log("admins : ", result);
  }

  async createAdministrator() {
    console.log("creating new Administrator ==> ", this.adminForm.value);
    const client = generateClient<Schema>();
    await client.models.Administrator.create(this.adminForm.value);
  }
}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }
  user!: any;
  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
      this.user = data;
    });


  }

}

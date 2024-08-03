import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { get } from 'aws-amplify/api';
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
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
    //   console.log("HttpClient called:", data);
    //   this.user = data;
    // });

    this.getItem();

  }

  async getItem() {
    console.log('GET call initiated');
    try {
      const restOperation = get({
        apiName: 'myHttpApi',
        path: 'items'
      });
      const { body } = await restOperation.response;

      console.log('GET call succeeded: ', await body.text());

    } catch (error) {
      console.log('GET call failed: ', error);
    }
  }


}

import { Injectable } from '@angular/core';
import { get } from 'aws-amplify/api';
import { data } from '../../../../amplify/data/resource';
import { ffb_tournament } from '../interface/tournament.ffb.interface';

@Injectable({
  providedIn: 'root'
})
export class FfbService {

  constructor() { }

  async getLicenceeDetails(search: string) {
    if (search === '') {
      return "";
    }
    try {
      const restOperation = get({
        apiName: 'myHttpApi',
        path: 'v1/search-members',
        options: {
          queryParams: { search: search }
        }
      });
      const { body } = await restOperation.response;
      // console.log('GET call succeeded: ', await body.text());
      const data = await body.json();
      return data;
    } catch (error) {
      console.log('GET call failed: ', error);
      return "";
    }
  }

  async getTournaments(): Promise<ffb_tournament[]> {
    try {
      const restOperation = get({
        apiName: 'myHttpApi',
        path: 'v1/organizations/1438/club_tournament',
      });
      const { body } = await restOperation.response;
      // console.log('GET call succeeded: ', await body.text());
      const data = await body.json();
      const data2 = data as unknown as ffb_tournament[];
      return data2;
    } catch (error) {
      console.log('GET call failed: ', error);
      return [];
    }
  }

}

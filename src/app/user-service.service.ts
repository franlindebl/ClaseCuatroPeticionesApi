import { Injectable } from '@angular/core';
import { User } from './interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  public getUsersListFromApi() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const observable = this.httpClient.get(apiURL);
    return observable;
  }
}

import { User } from '../model/user';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private getUsersUrl = environment.serverUrl + "/api/getusers";
  private getUserByUserNameURL = environment.serverUrl + "/api/getuser";
  private saveUserUrl = environment.serverUrl + "/api/saveuser";

  constructor(private http: Http, private router: Router) {
  }

  getUsers(): Observable<User[]> {

    return this.http.get(this.getUsersUrl)
      .map((response: Response) => <User[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

  }

  getUser(username): Observable<User> {

    var basicOptions: RequestOptionsArgs = {
      search: null,
      params: { "username": username }
    };

    return this.http.get(this.getUserByUserNameURL, basicOptions)
      .map((response: Response) => <User>response.json())
      .do(data => console.log('Get User Service for: ' + username + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveUser(user): Observable<boolean> {
    var basicOptions: RequestOptionsArgs = {
      search: null,
      body: user
    };

    return this.http.post(this.saveUserUrl, basicOptions)
      .map((response: Response) => <boolean>response.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

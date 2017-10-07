import { User } from '../common/model/user';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private getUsersUrl = "https://afternoon-forest-57488.herokuapp.com/api/getusers";
  private getUserByUserNameURL = "https://afternoon-forest-57488.herokuapp.com/api/getuser";
  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {

    return this.http.get(this.getUsersUrl)
      .map((response: Response) => <User[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

  }

  getUser(username): Observable<User> {

    var basicOptions:RequestOptionsArgs = {
      search: null,
      params:{"username":username}
    };
    //var reqOptions = new RequestOptions(basicOptions);

    return this.http.get(this.getUserByUserNameURL,basicOptions )
      .map((response: Response) => <User>response.json())
      .do(data => console.log('Get User Service for: ' + username + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

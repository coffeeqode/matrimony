import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { User } from '../../common/model/user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,OnDestroy {
  user: User;
  errorMessage: string;
  private sub: Subscription;


  constructor(private _route: ActivatedRoute,
    private _router: Router, private userService: UserService) { }


  ngOnInit() {

    this.sub = this._route.params.subscribe(
      params => {
        let username = params['username'];
        console.log("Route params:"+username)
        this.getUser(username);
      });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
}


  getUser(username) {
    this.userService.getUser(username).subscribe(
      user => {
        this.user = user[0]
      }, error => {
        error => this.errorMessage = <any>error
      })

  }

}

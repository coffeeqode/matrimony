import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../common/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  returnUrl: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    }
    );
  }

  login() {
    console.log("Setting new user login");
    localStorage.setItem('currentUser', "user");
    console.log("Redirecting to profile creation");

    if (this.returnUrl != undefined) {
      this.router.navigate([this.returnUrl])
    }

  }

}

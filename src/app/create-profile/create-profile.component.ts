import { UserService } from '../common/service/user.service';
import { User } from '../common/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent  {

  user = new User("", "", "", "", "", "", "", "", "", "", "", "");
  errorMessage: string;

  constructor(private userService: UserService) { }
 
  newProfile() {
    console.log(this.user);

    this.userService.saveUser(this.user).subscribe(
      saved => {
        console.log(saved)
      }, error => {
        error => this.errorMessage = <any>error
      })
  }



}

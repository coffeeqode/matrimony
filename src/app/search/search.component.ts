import { UserService } from '../common/service/user.service';
import { User } from '../common/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[];
  errorMessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      users => {
        this.users = users
      }, error => {
        error => this.errorMessage = <any>error
      })

  }

}



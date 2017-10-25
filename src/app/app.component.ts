import { Component } from '@angular/core';
import {environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  envLabel = environment.envName;
  

  logout(){
    console.log("Logged out current user");
    
    localStorage.removeItem("currentUser");
  }
}

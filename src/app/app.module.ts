import { UserService } from './common/service/user.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './search/user-detail/user-detail.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

import {LoginGuard} from '../app/common/service/login-guard.service'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    UserDetailComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'createprofile', component: CreateProfileComponent,
        canActivate: [LoginGuard]
      },
      { path: 'userdetail/:username', component: UserDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [UserService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

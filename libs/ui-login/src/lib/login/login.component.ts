import { Component, OnInit } from '@angular/core';
import { Login } from '@bba/api-interfaces';
import { AuthService } from '@bba/core-data';

@Component({
  selector: 'bba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: Login = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginInfo: Login) {
    this.authService.login(loginInfo);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '@bba/api-interfaces';
import { AuthService } from '@bba/core-data';

@Component({
  selector: 'bba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  loginInfo: Login = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(email, password) {
    return this.authService.login(email, password);
  }
}

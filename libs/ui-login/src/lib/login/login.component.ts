import { Component, OnInit } from '@angular/core';
import { Login } from '@bba/api-interfaces';

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

  constructor() { }

  ngOnInit(): void {
  }
}

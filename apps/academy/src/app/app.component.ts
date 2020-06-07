import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // DEMO: Automatically log the user out
    // const trigger = timer(5000);
    // trigger
    //   .pipe(first())
    //   .subscribe(_ => this.logout());
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}

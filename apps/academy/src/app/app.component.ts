import { Component } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from '@bba/core-data';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed'
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BrieBug Students';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));
  sidenavStatus = SidenavStatus.OPENED;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  toggleSidenav(status: SidenavStatus | null = null) {
    this.sidenavStatus = (this.sidenavStatus === SidenavStatus.OPENED) ?
      SidenavStatus.CLOSED :
      SidenavStatus.OPENED;
  }
}

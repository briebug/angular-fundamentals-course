import { Component } from '@angular/core';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed'
}

@Component({
  selector: 'bba-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
}

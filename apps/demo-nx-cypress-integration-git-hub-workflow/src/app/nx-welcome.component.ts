import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

/* eslint-disable */

@Component({
  selector: 'demo-nx-cypress-integration-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  person = {
    name: '',
    email: '',
  };
  constructor(private notification: NzNotificationService) {}

  ngOnInit(): void {}

  submit(): void {
    this.notification.blank('Saved', '').onClick.subscribe(() => {
      console.log('notification clicked!');
    });
  }
}

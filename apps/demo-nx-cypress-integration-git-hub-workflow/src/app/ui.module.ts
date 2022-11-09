import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzNotificationModule,
  ],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzNotificationModule,
  ],
})
export class UiModule {}

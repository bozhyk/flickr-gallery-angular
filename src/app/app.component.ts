import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tpredic-Gallery-Test';
  searchInputValue = 'test';

  private eventsSubject = new Subject<any>();

  emitEventToChild(value: string) {
    this.searchInputValue = value;
    this.eventsSubject.next(this.searchInputValue);
  }
}

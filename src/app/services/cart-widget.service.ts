import { Injectable, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartWidgetService implements OnInit {

  private showWidget$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  getShowWidget() {
    return this.showWidget$.asObservable();
  }

  setShowWidget(widgetShown: boolean) {
    this.showWidget$.next(widgetShown);
  }

  toggleWidgetState() {
    this.showWidget$.next(!this.showWidget$.value);
  }

  isWidgetOpen() {
    return this.showWidget$.value;
  }
}

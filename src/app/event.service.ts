import { Injectable, Output } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  @Output() windowResize$:    Observable<any>;
  @Output() mouseMove$:       Observable<MouseEvent>;
  @Output() numberGenerator$: Subject<number>;

  private nextSequenceNumber: number = 1;

  constructor() {
    this.windowResize$    = fromEvent(window, "resize");
    this.mouseMove$       = fromEvent<MouseEvent>(window, "mousemove");
    this.numberGenerator$ = new Subject();
  }

  public generateNextSequentialNumber(): void {
    this.numberGenerator$.next(this.nextSequenceNumber);
    this.nextSequenceNumber++;
  }
}

export class Point {
  constructor(public x: number, public y: number) {}
}

import { Injectable, Output } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  /*@Output()*/ public  windowResize$:    Observable<any>;
  /*@Output()*/ public  mouseMove$:       Observable<MouseEvent>;
  /*@Output()*/ private numberGenerator$: Subject<number>;

  public readonly sequentialNumberGenerator$: Observable<number>;

  private nextSequenceNumber: number = 1;

  constructor() {
    this.windowResize$    = fromEvent(window, "resize");
    this.mouseMove$       = fromEvent<MouseEvent>(window, "mousemove");
    this.numberGenerator$ = new Subject();
    this.sequentialNumberGenerator$ = this.numberGenerator$.asObservable();
  }

  public generateNextSequentialNumber(): void {
    this.numberGenerator$.next(this.nextSequenceNumber);
    this.nextSequenceNumber++;
  }
}

export class Point {
  public asOfDate: Date;

  constructor(public x: number, public y: number) {
    this.asOfDate = new Date();
  }
}

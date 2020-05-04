import { Component, OnInit } from '@angular/core';
import { Point, EventService } from '../event.service';
import { Observable } from 'rxjs';
import { map, skip, debounceTime, take, skipUntil, throttleTime, bufferCount, buffer, groupBy, flatMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  public mousePoint$: Observable<Point>;
  public myNumbers$:  Observable<number[][]>;

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
    this.mousePoint$ = this.eventService.mouseMove$.pipe(
      //throttleTime(200),
      debounceTime(200),
      //skip(3),
      map(event => new Point(event.screenX, event.screenY)));

    this.myNumbers$ = this.eventService.sequentialNumberGenerator$.pipe(
      take(10),
      groupBy(n => n % 2),
      flatMap(group => group.pipe(toArray())),
      toArray()
      );

    //let x = this.myNumbers$.pipe(toArray());

    this.myNumbers$.subscribe(console.log);
  }
}

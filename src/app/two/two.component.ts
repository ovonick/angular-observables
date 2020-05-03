import { Component, OnInit } from '@angular/core';
import { Point, EventService } from '../event.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  public mousePoint$: Observable<Point>;

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
    this.mousePoint$ = this.eventService.mouseMove$.pipe(map(event => new Point(event.screenX, event.screenY)));
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService, Point } from '../event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public height:     number;
  public mousePoint: Point;
  public numbers:    number[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.subscription.add(this.eventService.windowResize$.             subscribe(windowResizeEvent => this.height     = windowResizeEvent.target.innerHeight));
    this.subscription.add(this.eventService.mouseMove$.                subscribe(mouseMoveEvent    => this.mousePoint = new Point(mouseMoveEvent.screenX, mouseMoveEvent.screenY)));
    this.subscription.add(this.eventService.sequentialNumberGenerator$.subscribe(generatedNumber   => this.numbers.push(generatedNumber)));
  }

  ngOnDestroy(): void {
    console.log("unsubsribing");
    this.subscription.unsubscribe();
  }

  public onClick(): void{
    this.eventService.generateNextSequentialNumber();
  }
}

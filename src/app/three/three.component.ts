import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  public onClick() : void {
    this.eventService.generateNextSequentialNumber();
  }
}

import { Component, HostListener } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { ScreenEvent } from './shared/interfaces/screen-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventService: EventService) { }

  @HostListener('window:mousemove', ['$event']) handleMousemove(event: MouseEvent): void {
    this.eventService.inputMouseMove(event);
  }

  @HostListener('window:resize', ['$event']) resizeHandler(event: ScreenEvent): void {
    this.eventService.inputScreenResize(event);
  }

}

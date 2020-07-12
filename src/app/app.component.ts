import { Component, HostListener } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { ScreenEvent } from './shared/interfaces/screen-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventService: EventService) { }

  @HostListener('window:mousemove', ['$event']) handleMousemove(event: MouseEvent): void {
    this.eventService.inputMouseMove(event);

    console.log('============');

    console.log(this.eventService.screenConfig);
    console.log(this.eventService.mouseConfig);
    console.log(this.eventService.percentConfig);

    // let screenWidth = window.screen.width;
    // let screenHeight = window.screen.height;
    // let computedPixelRatio = (window.screen.availWidth / document.documentElement.clientWidth);

    console.log( window.screen.height );


  }

  @HostListener('window:resize', ['$event']) resizeHandler(event: ScreenEvent): void {
    this.eventService.inputScreenResize(event);
  }

}

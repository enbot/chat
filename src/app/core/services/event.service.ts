import { Injectable } from '@angular/core';
import { MouseConfig } from 'src/app/shared/interfaces/mouse-config';
import { PercentConfig } from 'src/app/shared/interfaces/percent-config';
import { ScreenConfig } from 'src/app/shared/interfaces/screen-config';
import { ScreenEvent } from 'src/app/shared/interfaces/screen-event';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public readonly onMouseMove: Subject<MouseEvent>;

  public readonly onScreenResize: Subject<ScreenEvent>;

  private screenWidth: number;

  private screenHeight: number;

  private mousePositionX: number;

  private mousePositionY: number;

  constructor() {
    this.onMouseMove = new Subject();
    this.onScreenResize = new Subject();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.mousePositionX = window.innerWidth / 2;
    this.mousePositionY = window.innerHeight / 2;
  }

  public get percentConfig(): PercentConfig {
    return {
      x: (this.mousePositionX / this.screenWidth) * 100,
      y: (this.mousePositionY / this.screenHeight) * 100,
    };
  }

  public get mouseConfig(): MouseConfig {
    return {
      x: this.mousePositionX,
      y: this.mousePositionY,
    };
  }

  public get screenConfig(): ScreenConfig {
    return {
      width: this.screenWidth,
      hieght: this.screenHeight,
    };
  }

  public inputMouseMove(event: MouseEvent): void {
    this.mousePositionX = event.pageX;
    this.mousePositionY = event.pageY;
    this.onMouseMove.next(event);
  }

  public inputScreenResize(event: ScreenEvent): void {
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;
    this.onScreenResize.next(event);
  }

}

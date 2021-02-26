import { Injectable } from '@angular/core';
import { TypeForm, TypeAxis } from 'src/app/shared/interfaces/metric-types';
import { ScreenEvent } from 'src/app/shared/interfaces/screen-events';
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

  public get percentConfig(): TypeAxis {
    return {
      x: (this.mousePositionX / this.screenWidth) * 100,
      y: (this.mousePositionY / this.screenHeight) * 100,
    };
  }

  public get mouseConfig(): TypeAxis {
    return {
      x: this.mousePositionX,
      y: this.mousePositionY,
    };
  }

  public get screenConfig(): TypeForm {
    return {
      width: this.screenWidth,
      height: this.screenHeight,
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

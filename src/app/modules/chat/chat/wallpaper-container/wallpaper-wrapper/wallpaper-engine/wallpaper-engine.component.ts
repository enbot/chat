import { Component, Input, OnInit } from '@angular/core';
import { TypeStyle } from 'src/app/shared/interfaces/metric-types';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';

@Component({
  selector: 'app-wallpaper-engine',
  templateUrl: './wallpaper-engine.component.html',
  styleUrls: ['./wallpaper-engine.component.scss']
})
export class WallpaperEngineComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  public ngOnInit(): void { }

  public getBackgroundFromMetadata(): TypeStyle {
    return {
      fill: this.command.metadata.color,
    };
  }

}

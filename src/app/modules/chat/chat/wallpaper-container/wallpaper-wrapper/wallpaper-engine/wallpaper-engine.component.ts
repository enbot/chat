import { Component, Input, OnInit } from '@angular/core';
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

}

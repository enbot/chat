import { Component, OnInit, Input } from '@angular/core';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';

@Component({
  selector: 'app-wallpaper-wrapper',
  templateUrl: './wallpaper-wrapper.component.html',
  styleUrls: ['./wallpaper-wrapper.component.scss']
})
export class WallpaperWrapperComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  public ngOnInit(): void { }

}

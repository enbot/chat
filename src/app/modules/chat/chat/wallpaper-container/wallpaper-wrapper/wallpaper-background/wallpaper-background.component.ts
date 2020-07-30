import { Component, OnInit, Input } from '@angular/core';
import { WallpaperState } from 'src/app/shared/models/wallpaper-states/wallpaper-state';

@Component({
  selector: 'app-wallpaper-background',
  templateUrl: './wallpaper-background.component.html',
  styleUrls: ['./wallpaper-background.component.scss']
})
export class WallpaperBackgroundComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  ngOnInit(): void { }

}

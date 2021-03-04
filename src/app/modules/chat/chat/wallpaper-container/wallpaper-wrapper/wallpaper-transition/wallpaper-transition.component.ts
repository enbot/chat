import { Component, OnInit, Input } from '@angular/core';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';

@Component({
  selector: 'app-wallpaper-transition',
  templateUrl: './wallpaper-transition.component.html',
  styleUrls: ['./wallpaper-transition.component.scss']
})
export class WallpaperTransitionComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  public ngOnInit(): void { }

}

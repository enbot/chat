import { Component, OnInit, Input } from '@angular/core';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';

@Component({
  selector: 'app-wallpaper-image',
  templateUrl: './wallpaper-image.component.html',
  styleUrls: ['./wallpaper-image.component.scss']
})
export class WallpaperImageComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  ngOnInit(): void { }

}

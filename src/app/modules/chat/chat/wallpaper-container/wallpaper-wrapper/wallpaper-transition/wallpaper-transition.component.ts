import { Component, OnInit, Input } from '@angular/core';
import { WallpaperState } from 'src/app/shared/models/wallpaper-states/wallpaper-state';

@Component({
  selector: 'app-wallpaper-transition',
  templateUrl: './wallpaper-transition.component.html',
  styleUrls: ['./wallpaper-transition.component.scss']
})
export class WallpaperTransitionComponent implements OnInit {

  @Input() command: WallpaperState;

  constructor() { }

  ngOnInit(): void { }

}

// <!-- command.transition: = {
//   name: Transition.NONE,
//   delay: 100,
//   offset: 3000,
//   duration: 1000,
// }  -->

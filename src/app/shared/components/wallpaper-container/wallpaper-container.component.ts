import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper-container',
  templateUrl: './wallpaper-container.component.html',
  styleUrls: ['./wallpaper-container.component.scss']
})
export class WallpaperContainerComponent implements OnInit {
  
  selectedClass : 'wallpaper-red' |'wallpaper-blue'

  constructor() { }

  ngOnInit(): void {
  }

  // onWallpaper.subscribe ( pica )=> this.selecteClass =  pica

}

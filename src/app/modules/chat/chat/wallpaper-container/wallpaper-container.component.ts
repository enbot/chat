import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommandService } from 'src/app/core/services/command.service';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';
import { WallpaperStateDark } from 'src/app/shared/models/wallpaper/wallpaper-dark';

@Component({
  selector: 'app-wallpaper-container',
  templateUrl: './wallpaper-container.component.html',
  styleUrls: ['./wallpaper-container.component.scss']
})
export class WallpaperContainerComponent implements OnInit, OnDestroy {

  command: WallpaperState = new WallpaperStateDark();

  subscription: Subscription;

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.subscription = this.commandService.onWallpaperChange
      .pipe(debounce(() => interval(400)))
      .subscribe(command => this.command = command);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

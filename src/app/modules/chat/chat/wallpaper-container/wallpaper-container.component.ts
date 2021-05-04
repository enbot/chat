import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommandService } from 'src/app/core/services/command.service';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';
import { WallpaperStateEngine } from 'src/app/shared/models/wallpaper/wallpaper-engine';

@Component({
  selector: 'app-wallpaper-container',
  templateUrl: './wallpaper-container.component.html',
  styleUrls: ['./wallpaper-container.component.scss']
})
export class WallpaperContainerComponent implements OnInit, OnDestroy {
  public command: WallpaperState = new WallpaperStateEngine();
  private subscription: Subscription;

  constructor(private commandService: CommandService) { }

  public ngOnInit(): void {
    this.subscription = this.commandService.onWallpaperChange
      .pipe(debounce(() => interval(400)))
      .subscribe(command => this.command = command);
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

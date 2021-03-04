import * as parts from '../../interfaces/wallpaper-parts';
import { WallpaperCommand } from '../../interfaces/wallpaper-types';
import { TypeStyle } from '../../interfaces/metric-types';

export class WallpaperState implements WallpaperCommand {

    constructor(
        public readonly metadata: parts.WallpaperMetadata,
        public readonly component: parts.WallpaperComponent,
        public readonly transition: parts.WallpaperTransition,
    ) {

    }

    getBackgroundStyles(): TypeStyle {
        return {
            backgroundColor: this.component.color,
        };
    }

    getImageStyles(): TypeStyle {
        return {
            backgroundImage: `url(${this.metadata.path})`,
            filter: this.metadata.effect
        };
    }

}

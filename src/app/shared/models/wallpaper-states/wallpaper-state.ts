import * as parts from '../../interfaces/wallpaper-parts';
import { WallpaperCommand } from '../../interfaces/wallpaper-types';

export class WallpaperState implements WallpaperCommand {

    constructor(
        public readonly image: parts.WallpaperImage,
        public readonly component: parts.WallpaperComponent,
        public readonly transition: parts.WallpaperTransition,
    ) {

    }

    // wallpaperStyles(): TypeStyle {

    //     return {

    //         background image papapa

    //     };

    // }

}
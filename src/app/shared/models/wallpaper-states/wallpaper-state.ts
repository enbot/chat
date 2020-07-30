import * as parts from '../../interfaces/wallpaper-parts';
import { WallpaperCommand } from '../../interfaces/wallpaper-types';
import { TypeStyle } from '../../interfaces/metric-types';

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

    backgroundStyles(): TypeStyle {
        return {
            backgroundColor: this.component.wallpaper,
        };
    }

    viewportStyles(): TypeStyle {
        return {
            height: `${this.component.height}%`,
            width: `${this.component.width}%`,
        };
    }

    imageStyles(): TypeStyle {
        return {
            backgroundImage: `url(${this.image.path}${this.image.name})`,
            filter: this.image.effect
        };
    }


}

// export interface WallpaperTransition {
//     name: Transition;
//     delay: TypeMilliseconds;
//     offset: TypeMilliseconds;
//     duration: TypeMilliseconds;
// }

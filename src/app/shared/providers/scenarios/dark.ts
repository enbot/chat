import * as parts from '../../interfaces/wallpaper-parts';
import { Transition } from '../configs/transition';
import { Wallpaper } from '../configs/wallpaper';
import { Effect } from '../configs/effect';
import { Color } from '../configs/color';

export const metadata: parts.WallpaperMetadata = {
    path: 'assets/images/pixel.png',
    effect: Effect.NONE,
};

export const component: parts.WallpaperComponent = {
    wallpaper: Wallpaper.IMAGE,
    color: Color.DARK,
};

export const transition: parts.WallpaperTransition = {
    name: Transition.NONE,
    duration: 0,
    offset: 0,
    delay: 0,
};

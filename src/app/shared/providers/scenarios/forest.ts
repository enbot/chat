import * as parts from '../../interfaces/wallpaper-parts';
import { Transition } from '../configs/transition';
import { Wallpaper } from '../configs/wallpaper';
import { Effect } from '../configs/effect';
import { Color } from '../configs/color';

export const metadata: parts.WallpaperMetadata = {
    path: 'assets/images/forest.jpg',
    effect: Effect.NONE,
};

export const component: parts.WallpaperComponent = {
    wallpaper: Wallpaper.IMAGE,
    color: Color.DARK,
    width: 100,
    height: 100,
};

export const transition: parts.WallpaperTransition = {
    name: Transition.NONE,
    duration: 1000,
    offset: 3000,
    delay: 100,
};

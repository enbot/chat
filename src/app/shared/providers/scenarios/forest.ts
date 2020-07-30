import * as parts from '../../interfaces/wallpaper-parts';
import { Effect } from '../configs/effect';
import { Color } from '../configs/color';
import { Transition } from '../configs/transition';

export const image: parts.WallpaperImage = {
    name: 'forest.jpg',
    path: 'assets/images/',
    effect: Effect.NONE,
}

export const component: parts.WallpaperComponent = {
    name: 'string',
    color: Color.BLACK,
    metadata: {
        url: null,
    },
}

export const transition: parts.WallpaperTransition = {
    name: Transition.NONE,
    delay: 100,
    offset: 3000,
}
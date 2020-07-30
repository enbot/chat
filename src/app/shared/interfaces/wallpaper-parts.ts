import { TypeMilliseconds, TypePercent } from '../interfaces/metric-types';
import { Transition } from '../providers/configs/transition';
import { Wallpaper } from '../providers/configs/wallpaper';
import { Effect } from '../providers/configs/effect';
import { Color } from '../providers/configs/color';

export interface WallpaperMetadata {
    path?: string;
    effect?: Effect;
    url?: string;
}

export interface WallpaperComponent {
    wallpaper: Wallpaper;
    color: Color;
    width: TypePercent;
    height: TypePercent;
}

export interface WallpaperTransition {
    name: Transition;
    delay: TypeMilliseconds;
    offset: TypeMilliseconds;
    duration: TypeMilliseconds;
}

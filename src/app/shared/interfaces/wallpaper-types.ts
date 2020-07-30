import * as parts from './wallpaper-parts';
import { TypeStyle } from './metric-types';

export interface WallpaperCommand {
    image: parts.WallpaperImage;
    component: parts.WallpaperComponent;
    transition: parts.WallpaperTransition;
    backgroundStyles(): TypeStyle;
    viewportStyles(): TypeStyle;
    imageStyles(): TypeStyle;
}

export interface WallpaperCommandList {
    CHANGE_SCENARIO_DARK: WallpaperCommand;
    CHANGE_SCENARIO_FOREST: WallpaperCommand;
    CHANGE_SCENARIO_SNOW: WallpaperCommand;
}

export type WallpaperCommandKey = keyof WallpaperCommandList;

import * as parts from './wallpaper-parts';
import { TypeStyle } from './metric-types';

export interface WallpaperCommand {
    metadata: parts.WallpaperMetadata;
    component: parts.WallpaperComponent;
    transition: parts.WallpaperTransition;
    getBackgroundStyles(): TypeStyle;
    getViewportStyles(): TypeStyle;
    getImageStyles(): TypeStyle;
}

export interface WallpaperCommandList {
    CHANGE_SCENARIO_DARK: WallpaperCommand;
    CHANGE_SCENARIO_FOREST: WallpaperCommand;
    CHANGE_SCENARIO_SNOW: WallpaperCommand;
}

export type WallpaperCommandKey = keyof WallpaperCommandList;

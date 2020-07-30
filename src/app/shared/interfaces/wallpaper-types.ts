import * as parts from './wallpaper-parts';

export interface WallpaperCommand {
    image: parts.WallpaperImage;
    component: parts.WallpaperComponent;
    transition: parts.WallpaperTransition;
}

export interface WallpaperCommandList {
    CHANGE_SCENARIO_FOREST: WallpaperCommand;
    CHANGE_SCENARIO_SNOW: WallpaperCommand;
}

export type WallpaperCommandKey = keyof WallpaperCommandList;

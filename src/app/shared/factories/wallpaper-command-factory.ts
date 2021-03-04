import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';
import { WallpaperStateDark } from 'src/app/shared/models/wallpaper/wallpaper-dark';
import { WallpaperStateEngine } from 'src/app/shared/models/wallpaper/wallpaper-engine';

export function makeWallpaperCommands(): WallpaperCommandList {
    return {
        CHANGE_SCENARIO_DARK: new WallpaperStateDark(),
        CHANGE_SCENARIO_ENGINE: new WallpaperStateEngine(),
    };
}

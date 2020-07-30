import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';
import { WallpaperStateForest } from 'src/app/shared/models/wallpaper-states/wallpaper-forest';
import { WallpaperStateDark } from 'src/app/shared/models/wallpaper-states/wallpaper-dark';

export function wallpaperCommandFactory(): WallpaperCommandList {
    return {
        CHANGE_SCENARIO_DARK: new WallpaperStateDark(),
        CHANGE_SCENARIO_FOREST: new WallpaperStateForest(),
        CHANGE_SCENARIO_SNOW: new WallpaperStateForest(),
    };
}

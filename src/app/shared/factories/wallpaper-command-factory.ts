import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';
import { WallpaperForest } from 'src/app/shared/models/wallpaper-states/wallpaper-forest';

export function wallpaperCommandFactory(): WallpaperCommandList {
    return {
        CHANGE_SCENARIO_FOREST: new WallpaperForest(),
        CHANGE_SCENARIO_SNOW: new WallpaperForest(),
    };
}

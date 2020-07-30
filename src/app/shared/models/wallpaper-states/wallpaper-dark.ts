import * as forest from '../../providers/scenarios/forest';
import { WallpaperState } from './wallpaper-state';

export class WallpaperStateDark extends WallpaperState {
    constructor() {
        super(
            forest.image,
            forest.component,
            forest.transition,
        );
    }
}

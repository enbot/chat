import * as forest from '../../providers/scenarios/forest';
import { WallpaperState } from './wallpaper-state';

export class WallpaperStateForest extends WallpaperState {
    constructor() {
        super(
            forest.metadata,
            forest.component,
            forest.transition,
        );
    }
}

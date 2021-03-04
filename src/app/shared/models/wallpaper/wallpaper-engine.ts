import * as engine from '../../providers/scenarios/engine';
import { WallpaperState } from './wallpaper-state';

export class WallpaperStateEngine extends WallpaperState {
    constructor() {
        super(
            engine.metadata,
            engine.component,
            engine.transition,
        );
    }
}

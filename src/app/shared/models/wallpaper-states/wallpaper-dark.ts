import * as dark from '../../providers/scenarios/dark';
import { WallpaperState } from './wallpaper-state';

export class WallpaperStateDark extends WallpaperState {
    constructor() {
        super(
            dark.metadata,
            dark.component,
            dark.transition,
        );
    }
}

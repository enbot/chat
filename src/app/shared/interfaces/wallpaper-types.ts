export interface WallpaperCommand {
    [prop: string]: any;
}

export interface WallpaperCommandList { }

export type WallpaperCommandKey = keyof WallpaperCommandList;

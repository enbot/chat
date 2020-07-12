export interface ScreenEventTarget extends EventTarget {
    innerWidth: number;
    innerHeight: number;
}

export interface ScreenEvent extends UIEvent {
    target: ScreenEventTarget;
}

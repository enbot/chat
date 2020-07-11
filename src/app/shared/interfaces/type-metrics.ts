export type TypeMetric = TypeDegree | TypePercent | TypePixels | TypeClip | TypeClass | TypeHex;

export type TypeDegree = number;

export type TypePercent = number;

export type TypePixels = number;

export type TypeClip = string;

export type TypeClass = string;

export type TypeHex = string;

export type TypeSide = 'left' | 'right';

export interface TypeStyle {
    [attr: string]: TypeMetric;
}

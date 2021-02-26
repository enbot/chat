import { TypeClass, TypeHex } from '../interfaces/metric-types';

export interface ChatImage {
    path: string;
}

export interface ChatShape {
    color: TypeHex;
    background: TypeHex;
    shape: TypeClass;
}

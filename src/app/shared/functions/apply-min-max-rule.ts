export function applyMinMaxRule(base: number, max: number, min: number): number {
    if (base > max) {
        return max;
    } else if (base < min) {
        return min;
    } else {
        return base;
    }
}

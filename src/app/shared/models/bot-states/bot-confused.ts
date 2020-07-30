import * as confused from '../../providers/emotions/confused';
import { BotState } from './bot-state';

export class BotStateConfused extends BotState {
    constructor() {
        super(
            confused.body,
            confused.head,
            confused.eyebrow,
            confused.eye,
            confused.iris,
            confused.lid,
        );
    }
}

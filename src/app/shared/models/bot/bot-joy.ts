import * as joy from '../../providers/emotions/joy';
import { BotState } from './bot-state';

export class BotStateJoy extends BotState {
    constructor() {
        super(
            joy.body,
            joy.head,
            joy.eyebrow,
            joy.eye,
            joy.iris,
            joy.lid,
        );
    }
}

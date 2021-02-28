import * as careful from '../../providers/emotions/careful';
import { BotState } from './bot-state';

export class BotStateCareful extends BotState {
    constructor() {
        super(
            careful.body,
            careful.head,
            careful.eyebrow,
            careful.eye,
            careful.iris,
            careful.lid,
        );
    }
}

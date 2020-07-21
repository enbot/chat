import * as bored from '../../providers/emotions/bored';
import { BotState } from './bot-state';

export class BotStateBored extends BotState  {
    constructor() {
        super(
            bored.head,
            bored.eyebrow,
            bored.eye,
            bored.iris,
            bored.lid,
        );
    }
}

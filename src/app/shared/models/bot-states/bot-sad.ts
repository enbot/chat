import * as sad from '../../providers/emotions/sad';
import { BotState } from './bot-state';

export class BotStateSad extends BotState  {
    constructor() {
        super(
            sad.body,
            sad.head,
            sad.eyebrow,
            sad.eye,
            sad.iris,
            sad.lid,
        );
    }
}

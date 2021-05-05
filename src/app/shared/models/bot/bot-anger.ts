import * as anger from '../../providers/emotions/anger';
import { BotState } from './bot-state';

export class BotStateAnger extends BotState {
    constructor() {
        super(
            anger.body,
            anger.head,
            anger.eyebrow,
            anger.eye,
            anger.iris,
            anger.lid,
        );
    }
}

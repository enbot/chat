import * as fear from '../../providers/emotions/fear';
import { BotState } from './bot-state';

export class BotStateFear extends BotState {
    constructor() {
        super(
            fear.body,
            fear.head,
            fear.eyebrow,
            fear.eye,
            fear.iris,
            fear.lid,
        );
    }
}

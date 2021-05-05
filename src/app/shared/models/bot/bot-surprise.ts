import * as surprise from '../../providers/emotions/surprise';
import { BotState } from './bot-state';

export class BotStateSurprise extends BotState {
    constructor() {
        super(
            surprise.body,
            surprise.head,
            surprise.eyebrow,
            surprise.eye,
            surprise.iris,
            surprise.lid,
        );
    }
}

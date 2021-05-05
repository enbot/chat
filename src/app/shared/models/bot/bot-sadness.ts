import * as sadness from '../../providers/emotions/sadness';
import { BotState } from './bot-state';

export class BotStateSadness extends BotState {
    constructor() {
        super(
            sadness.body,
            sadness.head,
            sadness.eyebrow,
            sadness.eye,
            sadness.iris,
            sadness.lid,
        );
    }
}

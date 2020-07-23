import * as happy from '../../providers/emotions/happy';
import { BotState } from './bot-state';

export class BotStateHappy extends BotState {
    constructor() {
        super(
            happy.body,
            happy.head,
            happy.eyebrow,
            happy.eye,
            happy.iris,
            happy.lid,
        );
    }
}

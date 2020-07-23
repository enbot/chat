import * as angry from '../../providers/emotions/angry';
import { BotState } from './bot-state';

export class BotStateAngry extends BotState {
    constructor() {
        super(
            angry.body,
            angry.head,
            angry.eyebrow,
            angry.eye,
            angry.iris,
            angry.lid,
        );
    }
}

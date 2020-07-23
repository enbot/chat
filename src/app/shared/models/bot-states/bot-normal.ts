import * as normal from '../../providers/emotions/normal';
import { BotState } from './bot-state';

export class BotStateNormal extends BotState  {
    constructor() {
        super(
            normal.body,
            normal.head,
            normal.eyebrow,
            normal.eye,
            normal.iris,
            normal.lid,
        );
    }
}

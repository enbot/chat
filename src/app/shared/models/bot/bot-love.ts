import * as love from '../../providers/emotions/love';
import { BotState } from './bot-state';

export class BotStateLove extends BotState {
    constructor() {
        super(
            love.body,
            love.head,
            love.eyebrow,
            love.eye,
            love.iris,
            love.lid,
        );
    }
}

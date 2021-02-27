import * as rainbow from '../../providers/balloon/rainbow';
import { ChatState } from './chat-state';

export class ChatStateRainbow extends ChatState {
    constructor() {
        super(
            rainbow.image,
            rainbow.shape,
        );
    }
}

import * as standard from '../../providers/balloon/standard';
import { ChatState } from './chat-state';

export class ChatStateStandard extends ChatState {
    constructor() {
        super(
            standard.content,
            standard.shape,
        );
    }
}

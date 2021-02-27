import * as warning from '../../providers/balloon/warning';
import { ChatState } from './chat-state';

export class ChatStateWarning extends ChatState {
    constructor() {
        super(
            warning.content,
            warning.shape,
        );
    }
}

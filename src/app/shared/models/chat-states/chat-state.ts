import * as parts from '../../interfaces/chat-parts';
import { ChatCommand } from '../../interfaces/chat-types';

export class ChatState implements ChatCommand {

    constructor(
        public readonly content: parts.ChatContent,
        public readonly shape: parts.ChatShape,
    ) {

    }

}

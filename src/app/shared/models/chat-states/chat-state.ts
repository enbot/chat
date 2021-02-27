import * as parts from '../../interfaces/chat-parts';
import { ChatCommand } from '../../interfaces/chat-types';
import { TypeStyle } from '../../interfaces/metric-types';

export class ChatState implements ChatCommand {

    constructor(
        public readonly content: parts.ChatContent,
        public readonly shape: parts.ChatShape,
    ) {

    }

    public containerStyles(): TypeStyle {
        return {

        };
    }

}

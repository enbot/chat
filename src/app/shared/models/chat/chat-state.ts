import * as parts from '../../interfaces/chat-parts';
import { ChatCommand } from '../../interfaces/chat-types';
import { TypeClass, TypeStyle } from '../../interfaces/metric-types';

export class ChatState implements ChatCommand {

    constructor(
        public readonly content: parts.ChatContent,
        public readonly shape: parts.ChatShape,
    ) { }

    public getBalloonStyles(): TypeStyle {
        return {
            'background-color': this.shape.background,
        };
    }

    public getBalloonClasses(): TypeClass {
        return `${this.shape.shape} ${this.shape.effect}`;
    }

    public getContentStyles(): TypeStyle {
        return {
            color: this.content.color,
        };
    }

    public getContentClasses(): TypeClass {
        return `${this.content.effect}`;
    }

}

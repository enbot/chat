import { TypeSide } from 'src/app/shared/interfaces/metric-types';
import { ChatBalloonContent } from '../../interfaces/chat-balloon';

export class ChatMessage {

    private when: Date;

    private content: ChatBalloonContent;

    constructor(
        public readonly message: string,
        public readonly author: string,
        public readonly side: TypeSide,
    ) {
        this.when = new Date();
        this.content = 'standard';
    }

    public setContent(content: ChatBalloonContent): void {
        this.content = content;
    }

    // getXesque() {
    //     return 'A xesque ago'
    // }

}

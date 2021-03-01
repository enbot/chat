import { TypeSide } from 'src/app/shared/interfaces/metric-types';
import { ChatBalloonContent } from '../../interfaces/chat-balloon';

export class ChatMessage {

    private when: Date;

    constructor(
        public readonly message: string,
        public readonly author: string,
        public readonly side: TypeSide,
        public readonly content: ChatBalloonContent,
    ) {
        this.when = new Date();
    }

    // getXesque() {
    //     return 'A xesque ago'
    // }

}

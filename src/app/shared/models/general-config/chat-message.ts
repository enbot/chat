import { TypeSide } from '../../interfaces/type-metrics';

export class ChatMessage {

    public readonly when: Date;

    constructor(
        public readonly content: string,
        public readonly author: string,
        public readonly side: TypeSide,
    ) {
        this.when = new Date();
    }

}

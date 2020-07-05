import { TypeSide } from '../interfaces/type-side';

export class ChatMessage {

    public readonly when: Date;

    public readonly content: string;

    public readonly author: string;

    public readonly side: TypeSide;

    constructor(
        content: string,
        author: string,
        side: TypeSide,
    ) {
        this.when = new Date();
        this.content = content;
        this.author = author;
        this.side = side;
    }

}

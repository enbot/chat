import { TypeSide } from 'src/app/shared/interfaces/metric-types';
import { ChatBalloonContent } from 'src/app/shared/interfaces/chat-balloon';

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

    public getTimeSince(): string {
        const nowTime = new Date().getTime();
        const messageTime = this.when.getTime();
        const secondsFromNow = Math.floor(((nowTime - messageTime) / 1000));

        const aDayInSeconds = 86400;
        const aHourInSeconds = 3600;
        const aMinuteInSeconds = 60;

        if ((secondsFromNow / aDayInSeconds) > 1) {
            return Math.floor(secondsFromNow / aDayInSeconds) + 'days ago';
        } else if ((secondsFromNow / aHourInSeconds) > 1) {
            return Math.floor(secondsFromNow / aHourInSeconds) + 'hours ago';
        } else if ((secondsFromNow / aMinuteInSeconds) > 1) {
            return Math.floor(secondsFromNow / aMinuteInSeconds) + 'minutes ago';
        } else {
            return 'a few seconds ago';
        }
    }

}

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

    getTimeSince(): string {
        const nowTime = new Date().getTime();
        const messageTime = this.when.getTime();
        const secondsFromNow = Math.floor(((nowTime - messageTime) / 1000));

        const aYearInSeconds = 31536000;
        const aMonthInSeconds = 2592000;
        const aDayInSeconds = 86400;
        const aHourInSeconds = 3600;
        const aMinuteInSeconds = 60;

        let amount: number;
        let unit: string;

        if ((secondsFromNow / aYearInSeconds) > 1) {
            amount = secondsFromNow / aYearInSeconds;
            unit = 'year';
        } else if ((secondsFromNow / aMonthInSeconds) > 1) {
            amount = secondsFromNow / aMonthInSeconds;
            unit = 'month';
        } else if ((secondsFromNow / aDayInSeconds) > 1) {
            amount = secondsFromNow / aDayInSeconds;
            unit = 'day';
        } else if ((secondsFromNow / aHourInSeconds) > 1) {
            amount = secondsFromNow / aHourInSeconds;
            unit = 'hour';
        } else if ((secondsFromNow / aMinuteInSeconds) > 1) {
            amount = secondsFromNow / aMinuteInSeconds;
            unit = 'minute';
        } else {
            amount = secondsFromNow;
            unit = 'second';
        }

        const roundedAmount = Math.floor(amount);
        const fixedUnit = roundedAmount > 1 ? `${unit}s` : unit;

        return `${roundedAmount} ${fixedUnit}`;
    }

}

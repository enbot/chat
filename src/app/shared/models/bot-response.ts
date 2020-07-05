import { TypeState } from '../interfaces/type-state';

export class BotResponse {

    public readonly response: string;
    public readonly value: number;
    public readonly state: TypeState;

    constructor(response: string, value: number, state: TypeState) {
        this.response = response;
        this.value = value;
        this.state = state;
    }

}

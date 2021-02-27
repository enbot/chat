import * as danger from '../../providers/balloon/danger';
import { ChatState } from './chat-state';

export class ChatStateDanger extends ChatState {
    constructor() {
        super(
            danger.image,
            danger.shape,
        );
    }
}

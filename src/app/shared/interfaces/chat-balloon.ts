import { ChatMessage } from '../models/general-config/chat-message';
import { ChatCommand } from './chat-types';

export interface ChatBalloon {
    message: ChatMessage;
    command: ChatCommand;
}

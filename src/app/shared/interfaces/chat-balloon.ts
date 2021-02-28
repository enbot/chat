import { ChatMessage } from '../models/chat/chat-message';
import { ChatCommand } from './chat-types';

export interface ChatBalloon {
    message: ChatMessage;
    command: ChatCommand;
}

export type ChatBalloonContent = 'standard' | 'warning' | 'danger' | 'rainbow';

import * as parts from './chat-parts';

export interface ChatCommand {
    content: parts.ChatContent;
    shape: parts.ChatShape;
}

export interface ChatCommandList {
    CHANGE_BALLOON_DANGER: ChatCommand;
    CHANGE_BALLOON_STANDARD: ChatCommand;
    CHANGE_BALLOON_RAINBOW: ChatCommand;
    CHANGE_BALLOON_WARNING: ChatCommand;
}

export type ChatCommandKey = keyof ChatCommandList;

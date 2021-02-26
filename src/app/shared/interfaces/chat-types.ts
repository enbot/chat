import * as parts from './chat-parts';

export interface ChatCommand {
    message: string;
    image: parts.ChatImage;
    shape: parts.ChatShape;
}

export interface ChatCommandList {
    CHANGE_BALLOON_DANGER: ChatCommand;
    CHANGE_BALLOON_DEFAULT: ChatCommand;
    CHANGE_BALLOON_RAINBOW: ChatCommand;
    CHANGE_BALLOON_WARNING: ChatCommand;
}

export type ChatCommandKey = keyof ChatCommandList;

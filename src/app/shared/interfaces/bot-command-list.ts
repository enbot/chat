import { BotCommand } from './bot-command';

export interface BotCommandList {
    CHANGE_STATE_NORMAL: BotCommand;
    CHANGE_STATE_ANGRY: BotCommand;
    CHANGE_STATE_HAPPY: BotCommand;
    CHANGE_STATE_STAR: BotCommand;
    CHANGE_TATE_SAD: BotCommand;
    CHANGE_STATE_CLOSED: BotCommand;
    CHANGE_STATE_BORED: BotCommand;
    CHANGE_STATE_CAREFUL: BotCommand;
}

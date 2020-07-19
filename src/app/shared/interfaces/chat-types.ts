export interface ChatCommand {
    [prop: string]: any;
}

export interface ChatCommandList { }

export type ChatCommandKey = keyof ChatCommandList;

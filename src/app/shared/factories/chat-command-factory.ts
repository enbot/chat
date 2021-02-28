import { ChatCommandList } from 'src/app/shared/interfaces/chat-types';
import { ChatStateDanger } from 'src/app/shared/models/chat/chat-danger';
import { ChatStateStandard } from 'src/app/shared/models/chat/chat-standard';
import { ChatStateRainbow } from 'src/app/shared/models/chat/chat-rainbow';
import { ChatStateWarning } from 'src/app/shared/models/chat/chat-warning';

export function makeChatCommands(): ChatCommandList {
    return {
        CHANGE_BALLOON_DANGER: new ChatStateDanger(),
        CHANGE_BALLOON_STANDARD: new ChatStateStandard(),
        CHANGE_BALLOON_RAINBOW: new ChatStateRainbow(),
        CHANGE_BALLOON_WARNING: new ChatStateWarning(),
    };
}

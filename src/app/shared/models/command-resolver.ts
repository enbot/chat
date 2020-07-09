import { TypeCommandResolved } from '../interfaces/type-command-resolved';
import { TypeCommand } from '../interfaces/type-command';
import { AllCommandsListKey } from '../interfaces/all-commands-list-key';
import { AllCommandsKey } from '../interfaces/all-commands-key';
import { CommandContainer } from './command-container';

export class CommandResolver extends CommandContainer {

    constructor() {
        super();
    }

    public static assemble(listKey: AllCommandsListKey, commandKey: AllCommandsKey): TypeCommand {
        return CommandContainer[listKey][commandKey];
    }

    public static resolve(commandKey: AllCommandsKey): TypeCommandResolved {
        const lists = [
            { name: 'bot', content: CommandContainer.bot },
            { name: 'chat', content: CommandContainer.chat },
            { name: 'wallpaper', content: CommandContainer.wallpaper },
        ];

        for (const list of lists) {
            const listName = list.name as AllCommandsListKey;
            const keys = Object.keys(list.content);
            const keyIndex = keys.indexOf(commandKey);
            const keyName = keys[keyIndex] as AllCommandsKey;
            const keyExists = keyIndex !== -1;

            if (keyExists) {
                return {
                    valid: true,
                    list: listName,
                    key: keyName,
                };
            }
        }

        return { valid: false };
    }

}

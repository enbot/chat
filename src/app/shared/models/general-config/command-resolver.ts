import { AllCommandsKey, AllCommandsListKey, TypeCommand, TypeCommandResolved } from 'src/app/shared/interfaces/command-types';
import { CommandContainer } from './command-container';

export class CommandResolver {

    public static assemble(listKey: AllCommandsListKey, commandKey: AllCommandsKey): TypeCommand {
        return CommandContainer[listKey][commandKey];
    }

    public static resolve(commandKey: AllCommandsKey): TypeCommandResolved {
        const lists = [
            { name: 'bot', content: CommandContainer.bot },
            { name: 'chat', content: CommandContainer.chat },
            { name: 'wallpaper', content: CommandContainer.wallpaper },
        ];

        console.log(commandKey);
        // console.log(lists);

        for (const list of lists) {

            console.log(list);

            const listName = list.name as AllCommandsListKey;
            const keys = Object.keys(list.content);
            const keyIndex = keys.indexOf(commandKey);
            const keyName = keys[keyIndex] as AllCommandsKey;
            const keyExists = keyIndex !== -1;

            console.log(listName);
            console.log(keys);
            console.log(keyIndex);
            console.log(keyName);
            console.log(keyExists);

            if (keyExists) {
                return {
                    valid: true,
                    list: listName,
                    key: keyName,
                };
            }
        }

        return {
            valid: false,
        };
    }

}

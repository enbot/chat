import { TypeCommandResolved } from '../interfaces/type-command-resolved';
import { TypeCommand } from '../interfaces/type-command';
import { AllCommandsListKey } from '../interfaces/all-commands-list-key';
import { AllCommandsKey } from '../interfaces/all-commands-key';
import { CommandContainer } from './command-container';

export class CommandResolver extends CommandContainer {

    constructor() {
        super();
    }

    public static assemble(key: AllCommandsListKey, value: AllCommandsKey): TypeCommand {
        return CommandContainer[key][value];
    }

    public static resolve(command: TypeCommand): TypeCommandResolved {

        // for ( in ) {
        //     for (of ) {
        //     }
        // }

        return {
            valid: false
        };

    }


}

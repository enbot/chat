import { AllCommandsListKey } from '../interfaces/all-commands-list-key';
import { AllCommandsKey } from '../interfaces/all-commands-key';
import { CommandContainer } from './command-container';
import { TypeCommand } from '../interfaces/type-command';

export class CommandResolver extends CommandContainer {

    constructor() {
        super();
    }

    public static assemble(key: AllCommandsListKey, value: AllCommandsKey): TypeCommand {
        return CommandContainer[key][value];
    }

    public static resolve(command: TypeCommand): string[] | void {

        // for ( in ) {
        //     for (of ) {
        //     }
        // }

    }


}

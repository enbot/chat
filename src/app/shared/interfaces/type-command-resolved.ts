import { AllCommandsListKey } from './all-commands-list-key';
import { AllCommandsKey } from './all-commands-key';

export interface TypeCommandResolved {
    valid: boolean;
    list?: AllCommandsListKey;
    key?: AllCommandsKey;
}

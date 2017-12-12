import { Person } from './Person';
/**
 * [constructor description]
 * @method constructor
 * @param  {string}    name [description]
 * @return {[type]}    [description]
 */
export declare class Male extends Person {
    constructor(name: string);
    getName: () => string;
    setName: (name: string) => void;
}

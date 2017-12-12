import {Person} from './Person'
/**
 * [constructor description]
 * @method constructor
 * @param  {string}    name [description]
 * @return {[type]}    [description]
 */
export class Male extends Person{
  constructor(name:string){
    super(name)
  }
  getName = ()=>{
    return this.name
  }
  setName = (name:string)=>{
    this.name = name
  }
}

import {Option} from './option.model';
export class Question{
    constructor(
        public question:string,
        public answers:Array<Option>,
        public answerIndex:number,
        public correct:boolean
    ){
        

    }
}
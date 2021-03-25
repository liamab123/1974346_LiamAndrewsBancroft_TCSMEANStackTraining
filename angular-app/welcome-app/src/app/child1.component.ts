import{Component} from '@angular/core'
@Component({
    selector:"child1",
    templateUrl:`
    <div>
    This is second child '' component {{msg}}
    </div>
    `,
    styles:[("div{color:red}")]
})
export class Child1{
    msg:string = "Welcome to second child component";
}
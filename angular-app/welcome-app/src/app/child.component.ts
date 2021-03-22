import {Component} from '@angular/core';
@Component({
    selector:"child-tag",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.css"]
})
export class ChildComponent{
    msg:string="this is a child component";
}
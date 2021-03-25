import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'; 

@Injectable() 
export class FakeService{
    constructor(public http:HttpClient){}
    sayHello():string{
        return "Welcome to user defined service with DI";
    }
    loadFakeData(){
        this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>console.log(data));
    }
}
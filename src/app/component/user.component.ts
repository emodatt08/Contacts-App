/**
 * Created by emodatt08 on 01/06/2017.
 */
import { Component } from '@angular/core';
import {UsersService} from '../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
providers: [UsersService]
})
export class UserComponent  {
public users: User[];
public email: string;
public name: string;
public address: string;
public street: string;
public city: string;
public state: string;
public params: any;

    constructor(private usersService : UsersService){
        this.usersService.getUsers().subscribe(users => {
            console.log(users.data);
            this.users = users.data;
        });
        
    
    }

    setParams(form: any){
        return this.params = 
        {
            'name': form.name,
            'email': form.email,
            'street': form.street,
            'city': form.city,
            'state': form.state,
        }  
    }

    storeUser(form: NgForm){
       
        return this.usersService.storeUser(this.setParams(form.value)).subscribe(data => console.log(data),error => alert(error));
    }



}


interface address{
    street: string;
    city: string;
    state: string;
}

interface User{
    first_name: string;
    age : number;
    email : string;
    last_name : string;
}


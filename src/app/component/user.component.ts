/**
 * Created by emodatt08 on 01/06/2017.
 */
import { Component } from '@angular/core';
import {UsersService} from '../services/users.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
providers: [UsersService]
})
export class UserComponent  {
public users: User[];
    constructor(private usersService : UsersService){
        this.usersService.getUsers().subscribe(users => {
            console.log(users.data);
            this.users = users.data;
        });
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


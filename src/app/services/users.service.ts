import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
constructor(private http: Http){
    console.log("User data fetching.......");
}

getUsers(){
return this.http.get('http://localhost:5000/api/v1/users').map(res => res.json());
}

storeUser(params: string){
    let store = this.http.post('http://localhost:5000/api/v1/users',{params}).map(res => res.json());
}

}
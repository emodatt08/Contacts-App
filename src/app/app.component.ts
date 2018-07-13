import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul class="nav justify-content-end">
  <li class="nav-item"><a class="nav-link active" routerLink = "/">Home</a></li>
  <li  class="nav-item"><a  class="nav-link active" routerLink = "/about">About</a></li>
  </ul>
  <router-outlet></router-outlet>`,
})
export class AppComponent  {

  

}

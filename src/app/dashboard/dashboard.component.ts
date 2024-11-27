import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router: Router){}
       // go to login
    logout() {
      this._router.navigateByUrl("/login");
      //delete token
      sessionStorage.removeItem('token');
    }

    
  

}

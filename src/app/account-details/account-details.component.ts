import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  account:any = {};
  


  constructor(private _activatedRoute:ActivatedRoute, private _accountsService:AccountService){
    
    
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data); 
        // api call
        _accountsService.getAccounts(data.id).subscribe(
          (data:any) => {
            this.account = data;
          }
         
          
        )

      
      }
    )
  }















}

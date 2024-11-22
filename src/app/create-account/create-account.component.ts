import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private _AccountService:AccountService){}
 
  public accountform:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
   
  },

  )

  submit(){
    this._AccountService.CreateAccount(this.accountform.value).subscribe(
      (data:any) => {
        alert("Account Created Successfully!!!");
      },
      (error:any) => {
        alert("Error Creating Account");
      }
    )
  }

}

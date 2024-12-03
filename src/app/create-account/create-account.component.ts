import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  id:string="";

  constructor(private _AccountService:AccountService, private _activatedRoutet:ActivatedRoute){
    this._activatedRoutet.params.subscribe(
      (data:any) => {
        console.log(data);
        
        this.id=data.id;

        //api call
        this._AccountService.getAccounts(data.id).subscribe(
          (data:any) => {
            this.accountform.patchValue(data);
          },
          
          
        )

        
      }
    )
  }
 
  public accountform:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
   
  },

  )

  submit(){
    if(this.id){
      //edit
      this._AccountService.updateAccount(this.id, this.accountform.value).subscribe(
        (data:any) => {
          alert("Account Updated Successfully!!!");
        },
        (error:any) => {
          alert("Error Updating Account");
        }
      )
    }
    else{
      // create
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
}

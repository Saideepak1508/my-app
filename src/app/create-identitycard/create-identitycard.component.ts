import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-identitycard',
  templateUrl: './create-identitycard.component.html',
  styleUrls: ['./create-identitycard.component.css']
})
export class CreateIdentitycardComponent {
  constructor(private _identityservices:IdentityCardService){}

  public identitycardform: FormGroup = new FormGroup({
    school_name: new FormControl(),
    name:new FormControl(),
   phone:new FormControl(),
   dob:new FormControl(),
   city:new FormControl(),
   email:new FormControl(),
    profile_picture:new FormControl()
  });

  submit(){
    this._identityservices.createidentity(this.identitycardform.value).subscribe(
      (data: any) => {
        alert('Create identity card successfully submitted!!');
      },
      
      (Error:any)=> {
        alert("error Creating identity card");
      }
    )
    


  }

}

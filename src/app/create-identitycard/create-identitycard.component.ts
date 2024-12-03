import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-identitycard',
  templateUrl: './create-identitycard.component.html',
  styleUrls: ['./create-identitycard.component.css']
})
export class CreateIdentitycardComponent {
  id:string = '';
  constructor(private _identityservices:IdentityCardService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);

        this.id=data.id;

        // do api call
        _identityservices.getidentitys(data.id).subscribe(
          (data:any)=>{
            console.log(data);

            this.identitycardform.patchValue(data);
          }
        )
      }
    )
  }

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
    //edit
    if(this.id){
      this._identityservices.updateidentity(this.id,this.identitycardform.value).subscribe(
        (data: any) => {
          alert('Update identity card successfully submitted!!');
        },
        
        (Error:any)=> {
          alert("error Updating identity card");
        }
      )
      
    }
    else{
      //Create
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

}

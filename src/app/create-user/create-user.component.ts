import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userform: FormGroup = new FormGroup({  
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl( '',[Validators.required, Validators.min(10000000000),Validators.max(9999999999)]),
      address: new FormGroup({
      city: new FormControl( '', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),

    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([]),
    

  })
  userForm: any;

  
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
      number: new FormControl('',[Validators.required]),
      expiry: new FormControl(),
      cvv: new FormControl(),
    })
  )

  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }




  constructor(){
    this.userform.get("type")?.valueChanges.subscribe(
     (data:any)=>{
      if(data === "dayScholar"){
        this.userform.addControl('busFee',new FormControl());
        this.userform.removeControl('hostelFee');
      }else{
        this.userform.addControl('hostelFee',new FormControl());
        this.userform.removeControl('busFee');
      }
     }
      
     
    )
  }

  

submit(){
  console.log(this.userform);
 

}




}

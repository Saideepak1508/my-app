import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})
export class IdentityCardComponent {
  identitys:any = [];
  term: string = "";

  coloum:string="";
  order:string = "";

  constructor(private _identityservices:IdentityCardService){
  this._identityservices.getidentity().subscribe(
    (data:any)=>{
      this.identitys=data;
    },
    (Error:any)=>{
      alert("Error");
    }

  )
}

filter(){
  this._identityservices. getfilteridentity(this.term).subscribe(
    (data:any)=>{
      this.identitys=data;
    },
    (Error:any)=>{
      alert("Error");
    }
  )
}


sort(){
  this._identityservices.getsortidentity(this.coloum,this.order).subscribe(
    (data:any)=>{
      this.identitys = data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}


}

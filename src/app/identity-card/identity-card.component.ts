import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';
import { identity } from 'rxjs';

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

  // id:string = "";

  limit:number =0;
  page:number = 0;



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

delete(id:string){
  console.log(id);
  if(confirm("Are you sure you want to delete this account?")) {
    this._identityservices.deleteidentity(id).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Deleted Successfully");
        
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }else( 
    alert("Operation cancelled")
  )
  
  
 

}

pagination(){
  this._identityservices.getpagedidentity(this.limit, this.page).subscribe(
    (data:any)=>{
      this.identitys=data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}






}

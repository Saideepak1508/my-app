import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts:any = [];
  term: string = "";


  coloum:string="";
  order:string = "";

  limit:number =0;
  page:number = 0;


  constructor(private _AccountService:AccountService){
    _AccountService.getAccount().subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error");
      }
    
      
    )
  }

filter(){

  this. _AccountService.getfilterAccountservice(this.term).subscribe(
    (data:any) => {
      this.accounts = data;
    },
    (error:any) => {
      alert("internal server error");
    }
  )

}

sort(){
  this._AccountService.getsortedAccounts(this.coloum,this.order).subscribe(
(data:any)=>{
  this.accounts = data;
},
(error:any)=>{
  alert("internal server error");
}
  )

}


pagination(){
  this._AccountService.getpagedAccounts(this.limit,this.page).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}


delete(id:string){
  if(confirm("Are you sure you want to delete this account?")) {}
  this._AccountService.deleteAccount(id).subscribe(
    (data:any)=>{
      alert("Deleted successfully!!!")
      location.reload();
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}












}







  



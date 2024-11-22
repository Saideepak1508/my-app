import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any = [];
  term:string = "";

  coloum:string="";
  order:string = "";



  constructor(private _vechileService:VehicleService){
    _vechileService.getvechile().subscribe(
      (data:any) =>{
        this.vehicles=data;
      },
      (error:any) => {
        alert("internal  server error");
      }
    )

  }

  filter(){
    this. _vechileService.getfilterVechileservice(this.term).subscribe(
      (data:any) =>{
        this.vehicles=data;
      },
      (error:any) => {
        alert("internal  server error");
      }
    )
    

  }
sort(){
  this._vechileService.getSortedVehicles(this.coloum, this.order).subscribe(
    (data:any) =>{
      this.vehicles=data;
    },
    (error:any) => {
      alert("internal  server error");
    }
  )
}


delete(id:string){
  if(confirm("Are you sure to delete this vehicle?")){
   
  }

  this._vechileService.deleteVehicles(id).subscribe(
    (data:any) =>{
      alert("Deleted Successfully!!!!");
      location.reload();
      
    },
    (error:any) => {
      alert("internal  server error");
    }
  )
}

limit:number=0;
page:number=0;




pagination(){
  this._vechileService.getpagedVehicles(this.limit,this.page).subscribe(
    (data:any) =>{
      this.vehicles=data;
    },
    (error:any) => {
      alert("internal  server error");
    }

  )
}





}

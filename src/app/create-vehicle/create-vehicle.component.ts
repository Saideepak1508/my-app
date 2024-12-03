import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
id: string= "";

  constructor(private _VechileService:VehicleService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data);
        this.id = data.id;

        //api call
        this._VechileService.getvehicle(data.id).subscribe(
          (data:any) => {
            this.vehicleform.patchValue(data);
          }

        )
        
      }
    )
    
  }
 
  public vehicleform:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),

  },

  )

  submit(){

    if(this.id){
      //edit
      this._VechileService.updateVehicle(this.id, this.vehicleform.value).subscribe(
        (data:any) => {
          alert("Update succesfully!!!")
        },
        (Error:any) => {
          alert("Failed to update vehicle");
        }
      )
    }
    else{
      //create 
      // console.log(this.vehicleform);
    this._VechileService.createVehicles(this.vehicleform.value).subscribe(
      (data:any) => {
        alert("create succesfully!!!")
      },
      (Error:any) => {
        alert("Failed to create vehicle");
      }

    )
  }

    }









  }
  




  


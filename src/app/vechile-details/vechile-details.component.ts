import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechiole-details',
  templateUrl: './vechile-details.component.html',
  styleUrls: ['./vechile-details.component.css'],
})
export class VechioleDetailsComponent {
  vehicle: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _vehicleService: VehicleService
  ) {
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data);

      //do api call

      _vehicleService.getvehicle(data.id).subscribe((data: any) => {
        this.vehicle = data;
      });
    });
  }

  
}

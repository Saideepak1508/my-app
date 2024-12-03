import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdentityCardService } from '../identity-card.service';

@Component({
  selector: 'app-identity-card-details',
  templateUrl: './identity-card-details.component.html',
  styleUrls: ['./identity-card-details.component.css']
})
export class IdentityCardDetailsComponent {

  identity:any={}
  constructor(private _activatedRoute:ActivatedRoute, private _identitycardservice: IdentityCardService) { 
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data);

        // do api call
        _identitycardservice.getidentitys(data.id).subscribe(
          (data:any) => {
           this.identity =data;
          }
          
        )
       
      }
    )
  }

}

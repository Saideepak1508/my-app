import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PhotosComponent } from './photos/photos.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CreateIdentitycardComponent } from './create-identitycard/create-identitycard.component';
import { AngularComponent } from './angular/angular.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent ,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding', component:DatabindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:"directives", component:DirectivesComponent},
    {path:"eventregistration", component:EventRegistrationComponent},
    {path:"employee", component:EmployeeRegistrationComponent},
    {path:"employe", component:EmployeeComponent},
    {path:"flipkart", component:FlipkartComponent},
    {path:"abc", component:VehicleComponent},
    {path:"account", component:AccountComponent},
    {path:"amazon", component:AmazonComponent},
    {path:"mail", component:MailComponent},
    {path:"photos", component:PhotosComponent},
    {path:"weather",component:WeatherComponent},
    {path:"blog", component:BlogComponent},
    {path:"imdb", component:ImdbComponent},
    {path:"create-vehicle", component:CreateVehicleComponent},
    {path:"create-account", component:CreateAccountComponent},
    {path:"identity_card", component:IdentityCardComponent},
    {path:"create-identitycard", component:CreateIdentitycardComponent},
    {path:"angular", component:AngularComponent},
    {path:"Create-user", component:CreateUserComponent},
    {path:"student-form", component:StudentFormComponent},

  

  ]},



  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


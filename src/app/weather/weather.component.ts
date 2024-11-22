// import { Component } from '@angular/core';
// import { WeatherService } from '../weather.service';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent {
//   weathers:any = [];
//   constructor(private _weatherService:WeatherService){
//     _weatherService.getweather().subscribe(
//       (data: any) => {
//         this.weathers = data;
//       },
//       (err: any) => {
//         alert("Error");
//       }
//     )

//   }
  


// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: any = {};
  temperatureDotColor = 'yellow';
  isDay = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true';

    this.http.get<any>(apiUrl).subscribe((data) => {
      const currentWeather = data.current_weather;
      this.weather = {
        temperature: currentWeather.temperature,
        windSpeed: currentWeather.windspeed,
        windDirection: currentWeather.winddirection,
        time: currentWeather.time,
        windDirectionCardinal: this.getWindDirectionCardinal(currentWeather.winddirection),
      };
      this.isDay = currentWeather.is_day === 1;
      this.temperatureDotColor = this.getTemperatureDotColor(currentWeather.temperature);
    });
  }

  getTemperatureDotColor(temp: number): string {
    if (temp < 0) return 'blue';
    else if (temp >= 0 && temp <= 30) return 'yellow';
    else if (temp > 30 && temp <= 35) return 'green';
    else return 'red';
  }

  getWindDirectionCardinal(degree: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  }
}


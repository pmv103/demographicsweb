import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  location: any = { location: '' };
  current: any = { current: '', weather_icons: [], weather_descriptions: [] };
  weather_icons: Array<any> = [];
  weather_descriptions: Array<any> = [];
  selectedValue = '';
  title = 'demographicsweb';
  cityList: any = ['Stockholm', 'Mumbai', 'New York', 'Chicago'];

  form = new FormGroup({
    city: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);

    this.apiService.getCurrentWeather(this.selectedValue).subscribe((data) => {
      console.log('data is coming......');
      console.log(data);

      this.location = data;
      this.current = data;
      console.log('icons:' + this.current.current.weather_icons);
      this.weather_icons = this.current.current.weather_icons;
      this.weather_descriptions = this.current.current.weather_descriptions;
      document.getElementById('weatherDetails').style.display = 'block';
    });
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}

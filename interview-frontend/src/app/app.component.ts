import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interview-frontend';
  searchControl = new FormControl();
  // ! ignores initialization check
  cities!: Observable<any>;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.cities = this.citiesService.getCities();
  }

}

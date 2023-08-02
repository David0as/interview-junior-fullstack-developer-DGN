/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitiesService {
  private readonly cities: any[];

  constructor() {
    const citiesPath = path.resolve(__dirname, '..', '..', '..', 'cities.json');
    this.cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
    console.log(citiesPath);
  }

  findAll() {
    return this.cities;
  }

  findByName(cityName: string) {
    return this.cities.find((city) => city.cityName === cityName);
  }
}

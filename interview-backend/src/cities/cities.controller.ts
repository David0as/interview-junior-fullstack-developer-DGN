import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}
  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':cityName')
  findByName(@Param('cityName') cityName: string) {
    return this.citiesService.findByName(cityName);
  }
}

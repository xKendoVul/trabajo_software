import { Injectable } from '@nestjs/common';
import { CarsService } from '../modules/cars/services/cars.service';
import { initialData } from './data/seed.data';
import { Car } from 'src/modules/cars/entities/car.entity';

@Injectable()
export class SeedService {
  constructor(private readonly carsService: CarsService) {}

  async runSeed() {
    await this.insertNewCar();
    return 'SEED EXECUTED';
  }

  private async insertNewCar() {
    await this.carsService.deleteAllCars();

    const cars = initialData.cars;
    const insertPromises: Promise<Car | undefined>[] = [];
    cars.forEach((car) => {
      insertPromises.push(this.carsService.create(car));
    });

    await Promise.all(insertPromises);

    return true;
  }
}

// tarea: hacer las seed de los brands

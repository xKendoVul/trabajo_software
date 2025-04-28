import { Injectable } from '@nestjs/common';
import { CarsService } from '../modules/cars/services/cars.service';
import { BrandsService } from '../modules/brands/services/brands.service';
import { initialData } from './data/seed.data';
import { Brand } from 'src/modules/brands/entities/brand.entity';
import { Car } from 'src/modules/cars/entities/car.entity';
 
@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  async runSeedCar() {
    await this.insertNewCar();
    return 'SEED FOR CAR EXECUTED';
  }

  private async insertNewCar() {
    await this.carsService.deleteAllCars();

    // const cars = initialData.cars;
    // const insertPromises: Promise<Car | undefined>[] = [];
    // cars.forEach((car) => {
    //   insertPromises.push(this.carsService.create(car));
    // });

    // await Promise.all(insertPromises);

    return true;
  }

  // -----------------------------------------------------------

  async runSeedBrand() {
    await this.insertNewBrand();
    return 'SEED FOR BRAND EXCUTED';
  }

  private async insertNewBrand() {
    await this.brandService.deleteAllBrands();

    // const brands = initialData.brands;
    // const insertPromises: Promise<Brand | undefined>[] = [];
    // brands.forEach((brand) => {
    //   insertPromises.push(this.brandService.create(brand));
    // });

    // await Promise.all(insertPromises);

    return true;
  }
}

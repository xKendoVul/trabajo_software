import { Controller, Get, Param } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get(':entity')
  executeSeed(@Param('entity') entity: string) {
    if (entity === 'cars') {
      return this.seedService.runSeedCar();
    } else if (entity === 'brands') {
      return this.seedService.runSeedBrand();
    } else {
      return { message: 'Entidad no valida' };
    }
  }
}

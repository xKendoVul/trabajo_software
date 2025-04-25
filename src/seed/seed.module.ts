import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/modules/cars/cars.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule],
})
export class SeedModule {}

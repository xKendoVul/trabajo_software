import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { UpdateCarDto } from '../dto/cars.dto';
import { CarsService } from '../services/cars.service';
import { CreateCarDto } from '../dto/cars.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getFindAll(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.carsService.findAll(paginationDto);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.remove(id);
  }
}

/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarDto } from '../dto/cars.dto';
import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarsService {
  private readonly logger = new Logger('CarsService');

  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll() {
    return this.carRepository.find({});
  }

  async create(createCarDto: CreateCarDto) {
    try {
      const car = this.carRepository.create(createCarDto);
      await this.carRepository.save(car);
      return car;
    } catch (error) {
      // console.log(error);
      // throw new InternalServerErrorException('ayuda!');
      this.handleDBException(error);
    }
  }

  async findOne(id: number) {
    const car = await this.carRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException(
        `Carro con id ${id} no encontrado en la base de datos`,
      );
    }
    return car;
  }

  async remove(id: number) {
    const car = await this.findOne(id);
    await this.carRepository.remove(car);
    return {
      message: `Carro ${car.brand} ${car.model} eliminado correctamente`,
    };
  }

  private handleDBException(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Error inesperado, verifique los registros del servidor',
    );
  }
}

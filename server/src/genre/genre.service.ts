import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './models/genre.model';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private genre: typeof Genre) {}
  findAll(): Promise<Genre[]> {
    return this.genre.findAll({
      attributes: ['id', 'name'],
    });
  }
}

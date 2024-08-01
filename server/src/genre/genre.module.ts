import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './models/genre.model';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';

@Module({
  imports: [SequelizeModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}

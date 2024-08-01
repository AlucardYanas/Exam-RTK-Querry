import { Controller, InternalServerErrorException, Get } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './models/genre.model';
import { ApiResponse } from '@nestjs/swagger';
import { GenreDTO } from './dto/swagger.dto';

@Controller('genres')
export class GenreController {
  constructor(private readonly studentService: GenreService) {}
  @Get()
  @ApiResponse({ type: GenreDTO, isArray: true, status: 200 })
  findAll(): Promise<Genre[]> {
    try {
      return this.studentService.findAll();
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }
}

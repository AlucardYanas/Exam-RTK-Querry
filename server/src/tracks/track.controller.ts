import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/app/pipes/zodValidation.pipe';
import {
  FullTrackDto,
  TrackDto,
  TrackIdDto,
  trackCreateSchema,
  trackIdSchema,
  trackSchema,
} from './dto/track.dto';
import { TrackService } from './track.service';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import {
  TrackCreateDto,
  TrackFullDto,
  TrackUpdateDto,
} from './swaggerDTO/swagger.dto';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, description: 'Track ID' })
  @ApiResponse({ type: TrackFullDto })
  @UsePipes(new ZodValidationPipe(trackIdSchema))
  async getTrackById(@Param() { id }: TrackIdDto): Promise<FullTrackDto> {
    try {
      return await this.trackService.getTrackById(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number, description: 'Track ID' })
  @ApiBody({ type: TrackUpdateDto })
  @ApiResponse({ type: TrackFullDto })
  async updateTrack(
    @Param(new ZodValidationPipe(trackIdSchema)) { id }: TrackIdDto,
    @Body(new ZodValidationPipe(trackSchema)) data: TrackDto,
  ): Promise<FullTrackDto> {
    try {
      return await this.trackService.updateTrack(id, data);
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, description: 'Track ID' })
  @ApiResponse({ type: Number })
  async deleteTrack(@Param() { id }: TrackIdDto): Promise<number> {
    try {
      return await this.trackService.deleteTrack(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  @Get('/genre/:id')
  @ApiParam({ name: 'id', type: Number, description: 'Genre ID' })
  @ApiResponse({ type: TrackFullDto, isArray: true })
  async getTracksByGenreId(
    @Param() { id }: TrackIdDto,
  ): Promise<FullTrackDto[]> {
    try {
      return await this.trackService.getTracksByGenreId(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  @Post('/genre/:id')
  @ApiParam({ name: 'id', type: Number, description: 'Genre ID' })
  @ApiBody({ type: TrackCreateDto })
  @ApiResponse({ type: TrackFullDto })
  async createTrack(
    @Param(new ZodValidationPipe(trackIdSchema)) { id }: TrackIdDto,
    @Body(new ZodValidationPipe(trackCreateSchema)) data: TrackCreateDto,
  ): Promise<FullTrackDto> {
    try {
      return await this.trackService.createTrack({ ...data, genre_id: id });
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class TrackCreateDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  group: string;

  @ApiProperty()
  img: string;
}

export class TrackUpdateDto extends TrackCreateDto {
  @ApiProperty()
  genre_id: number;
}

export class TrackFullDto extends TrackCreateDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  genre_id: number;
}

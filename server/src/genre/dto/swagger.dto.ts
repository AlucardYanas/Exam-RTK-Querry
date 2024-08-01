import { ApiProperty } from '@nestjs/swagger';

export class GenreDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

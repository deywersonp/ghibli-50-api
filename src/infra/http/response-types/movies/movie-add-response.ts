import { ApiProperty } from '@nestjs/swagger';

export class MovieAddResponse {
  @ApiProperty({ example: 22 })
  added_movies_count: number;
}

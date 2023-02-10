import { Movie } from '@application/entities/movie';
import { ApiProperty } from '@nestjs/swagger';

export class MovieHTTPModel {
  @ApiProperty()
  readonly id: string;
  @ApiProperty()
  readonly banner: string;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly director: string;
  @ApiProperty()
  readonly producer: string;
}
export class MovieViewModel {
  static toHTTP(movie: Movie) {
    return {
      id: movie.id,
      banner: movie.banner,
      title: movie.title,
      description: movie.description,
      director: movie.director,
      producer: movie.producer,
    };
  }
}

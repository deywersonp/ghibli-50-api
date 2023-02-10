import { MovieHTTPModel } from '@infra/http/view-models/movie-view-model';
import { ApiProperty } from '@nestjs/swagger';

export class MovieListResponse {
  @ApiProperty({
    isArray: true,
    type: MovieHTTPModel,
    example: [
      {
        id: '69196a1b-cd58-4bf1-8dfb-7862147a60dc',
        banner:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
        title: 'Castle in the Sky',
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
      },
    ],
  })
  movies: MovieHTTPModel[];
}

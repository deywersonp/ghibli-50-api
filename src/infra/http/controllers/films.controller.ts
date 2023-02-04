import { Controller, Post } from '@nestjs/common';
import { AddFilmsFromStudioGhibli } from '@application/use-cases/add-films-from-studio-ghibli';

@Controller('v1/films')
export class FilmsController {
  constructor(private addFilmsFromStudioGhibli: AddFilmsFromStudioGhibli) {}

  @Post()
  async add() {
    const { added_films_count } = await this.addFilmsFromStudioGhibli.execute();

    return {
      added_films_count,
    };
  }
}

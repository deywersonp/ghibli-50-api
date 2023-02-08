import { Module } from '@nestjs/common';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { DatabaseModule } from '@infra/database/database.module';
import { AxiosApiModule } from '@infra/external-api/axios/axios.module';
import { MoviesController } from './controllers/movies.controller';
import { GetAllMovies } from '@application/use-cases/get-all-movies';

@Module({
  imports: [DatabaseModule, AxiosApiModule],
  controllers: [MoviesController],
  providers: [AddMoviesFromStudioGhibli, GetAllMovies],
})
export class HttpModule {}

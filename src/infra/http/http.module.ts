import { Module } from '@nestjs/common';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { DatabaseModule } from '@infra/database/database.module';
import { AxiosApiModule } from '@infra/external-api/axios/axios.module';
import { MoviesController } from './controllers/movies.controller';

@Module({
  imports: [DatabaseModule, AxiosApiModule],
  controllers: [MoviesController],
  providers: [AddMoviesFromStudioGhibli],
})
export class HttpModule {}

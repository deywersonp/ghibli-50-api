import { Module } from '@nestjs/common';
import { MoviesRepository } from '@application/repositories/movies-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaMoviesRepository } from './prisma/repositories/prisma-movies-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: MoviesRepository,
      useClass: PrismaMoviesRepository,
    },
  ],
  exports: [MoviesRepository],
})
export class DatabaseModule {}

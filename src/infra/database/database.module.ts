import { Module } from '@nestjs/common';
import { FilmsRepository } from '../../application/repositories/films-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaFilmsRepository } from './prisma/repositories/prisma-films-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: FilmsRepository,
      useClass: PrismaFilmsRepository,
    },
  ],
  exports: [FilmsRepository],
})
export class DatabaseModule {}

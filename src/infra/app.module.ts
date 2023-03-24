import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { AxiosApiModule } from './external-api/axios/axios.module';
@Module({
  imports: [HttpModule, DatabaseModule, AxiosApiModule],
})
export class AppModule {}

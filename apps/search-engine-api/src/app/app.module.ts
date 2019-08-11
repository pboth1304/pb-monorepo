import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomTerminusModule } from '@pb-monorepo/shared/terminus';

@Module({
  imports: [CustomTerminusModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

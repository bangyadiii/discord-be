import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServerModule } from './server/server.module';
import { Module } from '@nestjs/common/decorators';

@Module({
  imports: [UsersModule, ServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

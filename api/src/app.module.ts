import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { VillagesModule } from './villages/villages.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [PrismaModule, UsersModule, VillagesModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

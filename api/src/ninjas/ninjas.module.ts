import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [NinjasController],
  providers: [NinjasService],
  imports: [PrismaModule],
})
export class NinjasModule { }

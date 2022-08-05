import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVillageDto } from './dto/create-village.dto';
import { UpdateVillageDto } from './dto/update-village.dto';

@Injectable()
export class VillagesService {
  constructor(private prisma: PrismaService) { }

  create(createVillageDto: CreateVillageDto) {
    return 'This action adds a new village';
  }

  findAll() {
    return this.prisma.village.findMany();
  }

  findOne(id: number) {
    return this.prisma.village.findUnique({ where: { id: id } });
  }

  update(id: number, updateVillageDto: UpdateVillageDto) {
    return `This action updates a #${id} village`;
  }

  remove(id: number) {
    return `This action removes a #${id} village`;
  }

  getNinjas(id: number) {
    return this.prisma.ninja.findMany({ where: { villageId: id } });
  }
}

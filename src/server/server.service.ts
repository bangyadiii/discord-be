import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Server } from '@prisma/client';

@Injectable()
export class ServerService {
  constructor(private prisma: PrismaService) {}

  async create(
    createServerDto: Prisma.ServerUncheckedCreateInput,
  ): Promise<Server> {
    return await this.prisma.server.create({
      data: createServerDto,
    });
  }

  findAll(query: Prisma.ServerFindManyArgs) {
    return this.prisma.server.findMany(query);
  }

  async findOne(id: string): Promise<Server | null> {
    return await this.prisma.server.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.ServerUncheckedUpdateInput) {
    return await this.prisma.server.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Server> {
    return await this.prisma.server.delete({ where: { id } });
  }
}

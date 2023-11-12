import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOrCreate(createUserDto: Prisma.UserCreateInput): Promise<User> {
    // find user
    const user = await this.prisma.user.findUnique({
      where: { userId: createUserDto.userId },
      include: { serverMembers: true, servers: true, friendSender: true },
    });

    if (!user) {
      // create user
      return await this.prisma.user.create({
        data: createUserDto,
      });
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateUserDto: Prisma.UserUpdateInput,
  ): Promise<User> {
    const userUpdated = await this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
    return userUpdated;
  }

  async remove(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: { id: id },
    });

    return user;
  }
}

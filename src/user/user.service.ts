import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const securePassword = await bcrypt.hash(createUserDto.password, 10)

    const data = {
      ...createUserDto,
      password: securePassword
    }
    
    const newUser = await this.prisma.user.create({data});

    return {
      ...newUser,
      password: undefined
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}

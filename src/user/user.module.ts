import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntinty } from './interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntinty])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

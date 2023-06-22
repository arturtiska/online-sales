import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { UserEntinty } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntinty)
        private readonly userRepository: Repository<UserEntinty>
    ) { }


    async createUser(createUserDto: CreateUserDto): Promise<UserEntinty> {
        const salOrRounds = 10;

        const passwordHash = await hash(createUserDto.password, salOrRounds);

        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHash,
        });
    }

    async getAllUsers(): Promise<UserEntinty[]> {
        return this.userRepository.find();
    }
}

import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { UserService } from './user.service';
import { UserEntinty } from './interfaces/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntinty> {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<UserEntinty[]> {
        return this.userService.getAllUsers();
}
}

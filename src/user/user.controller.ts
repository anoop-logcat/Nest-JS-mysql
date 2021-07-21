import { Body, Controller, Get, Post, Req, ValidationPipe } from '@nestjs/common';
import { UserDTO } from 'src/user/DTO/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) { }

    @Post('create')
    async create(@Body(new ValidationPipe()) userDTO: UserDTO) {
        return await this.appService.create(userDTO)
    }

    @Get('all')
    async getAllUser() {
        return "all user data"
    }

    @Get('current')
    async getUser(@Body('userID') userID: number) {
        return `user with ID data : ${userID}`
    }
}

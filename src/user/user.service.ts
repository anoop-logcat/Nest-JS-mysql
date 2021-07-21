import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/user/DTO/user.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    async create(dto: UserDTO) {
        return (await this.usersRepository.save(dto)) as UserEntity
    }
}

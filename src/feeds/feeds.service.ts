import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedsEntity } from 'src/entity/feeds.entity';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { FeedsDTO } from './DTO/feeds.dto';

@Injectable()
export class FeedsService {

    constructor(
        @InjectRepository(FeedsEntity)
        private feedsRepository: Repository<FeedsEntity>,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    async feedCreation(dto: FeedsDTO) {
        const user = await this.usersRepository.findOne({ userID: dto.ownerID })
        if (user) {
            const feeds = new FeedsEntity()
            feeds.feedDescription = dto.postDescription
            feeds.feedImage = dto.postImage
            feeds.likes = dto.likes
            feeds.owner = user
            return await this.feedsRepository.save(feeds)
        } else {
            throw new HttpException('Check the User ID provided', HttpStatus.UNAUTHORIZED)
        }
    }

    async getUserFeeds(userID: number) {
        const user = await this.usersRepository.findOne({ userID: userID })
        if (user) {
            return await this.feedsRepository.find({ owner: user });
        } else {
            throw new HttpException('Check the User ID provided', HttpStatus.UNAUTHORIZED)
        }
    }

    async getAllFeeds() {
        return await this.feedsRepository.find()
    }
}

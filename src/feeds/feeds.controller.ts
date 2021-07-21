import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { FeedsDTO } from './DTO/feeds.dto';
import { FeedsService } from './feeds.service';

@Controller('feed')
export class FeedsController {

    constructor(private readonly feedService: FeedsService) { }

    @Post('upload')
    async createFeeds(@Body(new ValidationPipe()) feedsDTO: FeedsDTO) {
        return this.feedService.feedCreation(feedsDTO)
    }

    @Get('all')
    async getAllPost() {
        return this.feedService.getAllFeeds()
    }

    @Get('currentUser')
    async getUserPostData(@Body('userID') userID: number) {
        return this.feedService.getUserFeeds(userID)
    }
}

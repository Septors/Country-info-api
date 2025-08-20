import { Body, Controller,Get,Param,ParseIntPipe,Post,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CalendarService } from 'src/calendar/calendar.service';

type UserDto = {
    email:string,
}

type holidaysInfo ={
    countryCode:string,
    years:number,
    holidays?:any[]
}

export type UserCalendarResponse={
    holidais:{
        name: string;
        date: string;
    }
}


@Controller('users')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly calendarService:CalendarService,
    ){}


    @Post("/create")
    async createUser(
        @Body() dto: UserDto
    ):Promise<{userId:number}>{
        return await this.userService.createUser(dto.email)
    }

    @Get("/:userId/calendar")
    async getUserCalendar(
        @Param("userId",ParseIntPipe) userId:number
    ):Promise<UserCalendarResponse>{
         return await this.userService.getUserCalendar(userId)
    }

    @Post('/:userId/calendar/holidays')
    async addholidaysTocalendar(
        @Param("userId",ParseIntPipe) userId:number,
        @Body() dto:holidaysInfo
    ):Promise<UserCalendarResponse>{
        console.log(dto)
        return await this.calendarService.addHolidaysToUserCalendar(userId,dto.years,dto.countryCode,dto.holidays)
    }

}

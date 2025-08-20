import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.reposityo';
import { CalendarRepository } from 'src/calendar/calendar.repository';
import { plainToInstance,Type } from 'class-transformer';


interface Holiday {
  name: string;
  date: string;
}

class ResponseUserCalendar {
  holidays: Holiday[];
}

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository:UserRepository,
        private readonly calendarRepository:CalendarRepository
    ){}
    async createUser(email:string):Promise<{userId:number}>{

        const user = await this.userRepository.createUser(email)

        if(!user){throw new InternalServerErrorException("Failed to create user") }
        
        return {userId:user.id};

    }

    async getUserCalendar(userId:number):Promise<{holidais:{name: string;
  date: string;}}>{
        const calendar = await this.calendarRepository.getUserCalendar(userId);

        if(!calendar){throw new NotFoundException(`Calendar for user:${userId} not found  `)}

        return plainToInstance(Promise<{holidais:{name: string;
  date: string;}}>,calendar,{excludeExtraneousValues:true})
    }
}

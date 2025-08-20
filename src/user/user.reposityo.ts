import { Injectable } from "@nestjs/common";
import { CalendarRepository } from "src/calendar/calendar.repository";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepository{
    constructor (
        private readonly prisma:PrismaService,
        private readonly calendarRepository:CalendarRepository
    ){}

    async createUser(email:string){
        return await this.prisma.user.create({
            data:{
                email,
            }
        })
    }

    async getuserCalendar(userId:number){
        return await this.calendarRepository.getUserCalendar(userId);
    }

} 
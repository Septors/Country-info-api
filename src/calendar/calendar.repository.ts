import { Injectable } from "@nestjs/common";
import { ExternalApiREpository } from "src/external-api/externalApi.repository";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CalendarRepository{
    constructor(
        private readonly prisma: PrismaService,
    ){}

    async checkCreatedCalendar(userId:number){
        return await this.prisma.calendar.findUnique({
            where:{userId}
        })
    }

    async getUserCalendar(userId:number){
        return await this.prisma.calendar.findUnique({
            where:{
                userId,
            },
            include:{
                holidays:{
                    select:{
                        date:true,
                        name:true,
                    }
                }
            },

        })
    }



    async addToCalendar(userId: number, holidays: { date: string, name: string}[]) {
   
        const createdCalendar =await this.checkCreatedCalendar(userId)

        if(createdCalendar){
            return await this.prisma.calendar.update({
                where:{userId},
        data: {
            userId,
            holidays:{
                create:holidays
            },
        },
        include:{holidays:{
            select:{
                name:true,
                date:true,
            }
        }}
    })
        }

    return await this.prisma.calendar.create({
        data: {
            userId,
            holidays:{
                create:holidays
            }
                
            
        }
    });
}


    

}
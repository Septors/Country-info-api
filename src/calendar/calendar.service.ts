import { Injectable } from '@nestjs/common';
import { ExternalApiREpository } from 'src/external-api/externalApi.repository';
import { CalendarRepository } from './calendar.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CalendarService {
    constructor(
        private readonly exteralApiRepository:ExternalApiREpository,
        private readonly calendarRepository:CalendarRepository,
    ){}

      async addHolidaysToUserCalendar(userId: number,year:number, countryCode: string, holidays?:string[]):Promise<{holidais:{name: string;
  date: string;}}> {


        const holidayData = await this.exteralApiRepository.getListholidays(year,countryCode);

        const filterHolidaysData = holidayData.map(({date,name}) => ({date,name}))
    
        if(!holidays || holidayData.length === 0){
            const calendar = await this.calendarRepository.addToCalendar(userId, filterHolidaysData);
            return   plainToInstance(Promise<{holidais:{name: string;
              date: string;}}>,calendar,{excludeExtraneousValues:true})
        }

        const lowerNameHollidays = holidays.map((holiday) => holiday.toLowerCase())

        const filterHolidays = filterHolidaysData.filter((item=> lowerNameHollidays.includes(item.name.toLowerCase())))

        const calendar = this.calendarRepository.addToCalendar(userId, filterHolidays);
        
        return   plainToInstance(Promise<{holidais:{name: string;
              date: string;}}>,calendar,{excludeExtraneousValues:true})
  }
}

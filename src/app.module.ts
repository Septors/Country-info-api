import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CountryModule } from './country/country.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExternalApiModule } from './external-api/external-api.module';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [
   UserModule,
   CalendarModule,
     CountryModule,
      PrismaModule,
         ExternalApiModule],
})
export class AppModule {}

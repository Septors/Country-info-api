import { Module } from "@nestjs/common";
import { CalendarRepository } from "./calendar.repository";
import { PrismaModule } from "src/prisma/prisma.module";
import { CalendarService } from './calendar.service';
import { ExternalApiModule } from "src/external-api/external-api.module";

@Module({
    exports:[CalendarRepository,CalendarService],
    imports:[PrismaModule,ExternalApiModule],
    providers:[CalendarRepository, CalendarService]

})

export class CalendarModule{};
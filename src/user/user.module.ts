import { Module } from '@nestjs/common';
import { CalendarModule } from 'src/calendar/calendar.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.reposityo';

@Module({
    controllers:[UserController],
    imports:[PrismaModule,CalendarModule],
    providers:[UserService,UserRepository]
})
export class UserModule {}

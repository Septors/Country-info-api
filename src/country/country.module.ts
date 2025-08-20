import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { ExternalApiModule } from 'src/external-api/external-api.module';

@Module({
    controllers:[CountryController],
    exports:[CountryService],
    imports:[ExternalApiModule],
    providers:[CountryService]
})
export class CountryModule {}

import { Controller,Post,Get, Param, ParseIntPipe, } from '@nestjs/common';
import { ExternalApiREpository } from 'src/external-api/externalApi.repository';
import { CountryService } from './country.service';

type CountryData = {
    countryCode: string,
        name: string,
}

type CountryInfo ={
    borders:string[],
    populationData:string[],
    flag:string

}

@Controller('countries')
export class CountryController {
    constructor(
        private readonly externalApiREpository:ExternalApiREpository,
        private readonly countryservice:CountryService
    
    ){}

    @Get()
    async getAvailableCountry():Promise<CountryData[]>{
        return await this.countryservice.getAvailableCountry()
        
    }

    @Get("/:countryCode")
    async getCoutryInfo(
        @Param("countryCode") countryCode:string
    ):Promise<CountryInfo>{
        return await this.countryservice.getCountryInformation(countryCode)
    }
}

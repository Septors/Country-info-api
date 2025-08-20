import { Injectable } from '@nestjs/common';
import { ExternalApiREpository } from 'src/external-api/externalApi.repository';

type CountryData = {
    countryCode: string,
        name: string,
}

type CountryInfo ={
    borders:string[],
    populationData:string[],
    flag:string

}

@Injectable()
export class CountryService {
    constructor(private readonly externalApiRepository:ExternalApiREpository){}

    async getAvailableCountry():Promise<CountryData[]>{
        return await this.externalApiRepository.getAvailableCountries()
    }

    async getCountryInformation(countryCode:string):Promise<CountryInfo>{
        const countryData = await this.externalApiRepository.getCountryInfo(countryCode)

        countryData.borders = countryData.borders.map((border) => border.officialName)

        return countryData
    }
}

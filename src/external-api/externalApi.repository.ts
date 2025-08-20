import { BadGatewayException, Injectable, InternalServerErrorException } from "@nestjs/common";
import axios from "axios";



@Injectable()
export class ExternalApiREpository{
    async getAvailableCountries(){
        try{
            const {data} = await axios.get("https://date.nager.at/api/v3/AvailableCountries")
            return data
        }catch(err){
            console.log(err)
            throw new  BadGatewayException("Failed to fetch available countries from external API");
        }
    }

    async getCountryInfo(countryCode:string){
        console.log(countryCode)
        try{
            const {data:countryInfo} = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)


             if(!countryInfo){throw new BadGatewayException("Failed to fetch country info from external API")}

            const countryCommonName = countryInfo.commonName;
            

            const {data:countryPopolation} = await axios.post("https://countriesnow.space/api/v0.1/countries/population",{country:countryCommonName})


            if(!countryPopolation){throw new BadGatewayException("Failed to fetch country info from external API")}

            const {data:countryFlag} = await axios.post("https://countriesnow.space/api/v0.1/countries/flag/images",{iso2:countryCode})


            if(!countryFlag){throw new BadGatewayException("Failed to fetch country info from external API")}

            return{borders:countryInfo.borders,populationData:countryPopolation.data.populationCounts,flag:countryFlag.data.flag}

        }catch(err){
            console.log(err)
            throw new InternalServerErrorException("Api error")
        }
    }


    async getListholidays (year:number,countryCode:string){
        try{
            const {data:holidays} = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)

            if(!holidays){throw new BadGatewayException("The request to the external API failed")}
            return holidays;
        }catch(err){
            console.log(err)
            throw new InternalServerErrorException("Server failed")
        }
    }
}


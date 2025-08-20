import { Module } from '@nestjs/common';
import { ExternalApiREpository } from './externalApi.repository';

@Module({
    exports:[ExternalApiREpository],
    providers:[ExternalApiREpository]
})
export class ExternalApiModule {}

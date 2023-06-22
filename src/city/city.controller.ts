import { Controller, Get, Param } from '@nestjs/common';
import { CityEntinty } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {

    constructor(
        private readonly cityService: CityService
    ) { }

    @Get('/:stateId')
    async getAllCitiesByStateId(@Param('stateId') stateId: number): Promise<CityEntinty[]> {
        return this.cityService.getAllCitiesByStateId(stateId);
    }
}

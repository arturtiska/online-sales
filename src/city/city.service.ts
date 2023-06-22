import { Injectable, Inject } from '@nestjs/common';
import { CityEntinty } from './entities/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntinty)
        private readonly cityRepository: Repository<CityEntinty>,

        private readonly cacheService: CacheService,
    ) { }

    async getAllCitiesByStateId(stateId: number): Promise<CityEntinty[]> {
        return this.cacheService.getCache<CityEntinty[]>(`state_${stateId}`, () =>
            this.cityRepository.find({
                where: {
                    stateId
                }
            })
        );
    }
}

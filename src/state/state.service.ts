import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntinty } from 'src/user/interfaces/user.entity';
import { StateEntinty } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {

    constructor(
        @InjectRepository(StateEntinty)
        private readonly stateRepository: Repository<StateEntinty>,
    ){}
    async getAllState():Promise<StateEntinty[]>{
        return await this.stateRepository.find();
    }
}

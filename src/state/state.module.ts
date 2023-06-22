import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntinty } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntinty])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}

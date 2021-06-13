import { Module } from '@nestjs/common';

import { InfraModule } from '../../../infra/infra.module';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [InfraModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}

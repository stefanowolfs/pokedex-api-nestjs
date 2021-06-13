import { Module } from '@nestjs/common';

import { InfraModule } from '../../infra/infra.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [InfraModule, PokemonModule],
})
export class V1Module {}

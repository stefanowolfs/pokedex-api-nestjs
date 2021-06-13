import { Module } from '@nestjs/common';

import { ConnectorsModule } from '../connectors/connectors.module';
import { PokeApiAdapterModule } from '../adapter/pokeApi/pokeApiAdapter.module';

@Module({
  imports: [ConnectorsModule, PokeApiAdapterModule],
  providers: [],
  exports: [PokeApiAdapterModule],
})
export class AdapterModule {}

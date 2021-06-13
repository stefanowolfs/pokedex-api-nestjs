import { Module } from '@nestjs/common';
import { ConnectorsModule } from '../../connectors/connectors.module';
import { PokeApiAdapter } from './pokeApiAdapter.provider';

@Module({
  imports: [ConnectorsModule],
  providers: [PokeApiAdapter],
  exports: [PokeApiAdapter],
})
export class PokeApiAdapterModule {}

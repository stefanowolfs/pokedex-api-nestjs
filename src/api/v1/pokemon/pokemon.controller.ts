import { Controller, Get } from '@nestjs/common';

import DownloadablePokemonResponse from './infra/response/downloadablePokemonResponse';
import { PokemonService } from './pokemon.service';

@Controller()
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @Get('downloadable')
  async listDownloadable(): Promise<DownloadablePokemonResponse[]> {
    return this.service.listDownloadable();
  }
}

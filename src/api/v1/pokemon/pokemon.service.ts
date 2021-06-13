import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

import { PokeApiAdapter } from '../../../infra/adapter/pokeApi/pokeApiAdapter.provider';
import DownloadablePokemonMapper from './infra/mappers/downloadablePokemonMapper';
import DownloadablePokemonResponse from './infra/response/downloadablePokemonResponse';
import DownloadablePokemonPageReceiveContract from '../../../infra/adapter/pokeApi/contracts/receive/downloadablePokemonPageReceiveContract';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiAdapter: PokeApiAdapter) {}

  public async listDownloadable(): Promise<DownloadablePokemonResponse[]> {
    try {
      const BATCH_SIZE = 100;
      const teste: DownloadablePokemonResponse[] = await this.recursivelyBuildPokemonDownloadList(
        true,
        BATCH_SIZE,
      );
      return teste;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  private async recursivelyBuildPokemonDownloadList(
    hasMoreToDownload: boolean,
    limit: number,
    offset = 0,
    results: DownloadablePokemonResponse[] = [],
  ): Promise<DownloadablePokemonResponse[]> {
    return new Promise(async (superResolve) => {
      if (!hasMoreToDownload) {
        superResolve(results);
        return;
      }
      const resultPage: DownloadablePokemonPageReceiveContract = await this.pokeApiAdapter.listDownloadablePokemons(
        offset,
        limit,
      );
      const updatedResults: DownloadablePokemonResponse[] = [
        ...results,
        ...resultPage.results.map((result) =>
          DownloadablePokemonMapper.contractToResource(result),
        ),
      ];
      superResolve(
        this.recursivelyBuildPokemonDownloadList(
          !!resultPage.next,
          limit,
          offset + limit,
          updatedResults,
        ),
      );
    });
  }
}

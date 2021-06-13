import {
  HttpException,
  HttpService,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

import DownloadablePokemonPageReceiveContract from './contracts/receive/downloadablePokemonPageReceiveContract';
import DownloadablePokemonReceiveContract from './contracts/receive/downloadablePokemonReceiveContract';

@Injectable()
export class PokeApiAdapter {
  private POKEAPI_URL = process.env.POKEAPI_URL;

  constructor(private readonly httpService: HttpService) {}

  public async listDownloadablePokemons(
    offset: number,
    limit: number,
  ): Promise<DownloadablePokemonPageReceiveContract> {
    try {
      const url = `${this.POKEAPI_URL}/v2/pokemon/`;
      const config: AxiosRequestConfig = { params: { offset, limit } };
      return await this.httpService
        .get(url, config)
        .toPromise()
        .then((response) => {
          if (!response.data) return null;
          return new DownloadablePokemonPageReceiveContract(
            response.data.count,
            response.data.next,
            response.data.previous,
            response.data.results.map(
              (result) =>
                new DownloadablePokemonReceiveContract(result.name, result.url),
            ),
          );
        })
        .catch((error) => {
          throw new HttpException(
            error.response.data.message,
            error.response.status,
          );
        });
    } catch (error) {
      if (error?.status === 403) throw new HttpException('Unauthorized', 403);
      throw new InternalServerErrorException();
    }
  }
}

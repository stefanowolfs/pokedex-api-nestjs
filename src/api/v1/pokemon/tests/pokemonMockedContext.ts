import DownloadablePokemonPageReceiveContract from '../../../../infra/adapter/pokeApi/contracts/receive/downloadablePokemonPageReceiveContract';
import DownloadablePokemonReceiveContract from '../../../../infra/adapter/pokeApi/contracts/receive/downloadablePokemonReceiveContract';
import DownloadablePokemonResponse from '../infra/response/downloadablePokemonResponse';

const mockedPokemonName = 'charizard';
const mockedPokemonId = 1;
const mockedPokemonUrl = 'www.somesite.com.br/something/pokemon/1/';

export const mockedDownloadablePokemonResponse = new DownloadablePokemonResponse(
  mockedPokemonName,
  mockedPokemonId,
);

export const mockedDownloadablePokemonPageReceiveContract = new DownloadablePokemonPageReceiveContract(
  1,
  null,
  null,
  [new DownloadablePokemonReceiveContract(mockedPokemonName, mockedPokemonUrl)],
);

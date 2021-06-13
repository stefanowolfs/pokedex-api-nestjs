import DownloadablePokemonReceiveContract from '../../../../../infra/adapter/pokeApi/contracts/receive/downloadablePokemonReceiveContract';
import DownloadablePokemonResponse from '../response/downloadablePokemonResponse';

export default class DownloadablePokemonMapper {
  static contractToResource(
    contract: DownloadablePokemonReceiveContract,
  ): DownloadablePokemonResponse {
    return new DownloadablePokemonResponse(
      contract.name,
      contract.getEntityId(),
    );
  }
}

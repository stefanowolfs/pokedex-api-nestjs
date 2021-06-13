import DownloadableSharedResource from '../../../../infra/sharedResource/downloadableSharedResource';

export default class DownloadablePokemonResponse extends DownloadableSharedResource {
  constructor(name: string, entityId: number) {
    super(name, entityId, 'pokemon');
  }
}

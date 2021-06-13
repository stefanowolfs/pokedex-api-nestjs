import DownloadableItemSharedResource from '../../../../../api/infra/sharedResource/downloadableItemSharedResource';

export default class DownloadablePokemonReceiveContract extends DownloadableItemSharedResource {
  public getEntityId(): number {
    if (!this.url) return null;
    const urlParameters = this.url.split('/');
    if (urlParameters.length === 0) return null;
    const lastUrlParameter = urlParameters?.[urlParameters.length - 2];
    if (!lastUrlParameter) return null;
    return parseInt(lastUrlParameter);
  }
}

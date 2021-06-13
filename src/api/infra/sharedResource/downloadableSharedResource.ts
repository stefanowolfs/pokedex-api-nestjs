export default class DownloadableSharedResource {
  name: string;

  entityId: number;

  entityType: string;

  constructor(name: string, entityId: number, entityType: string) {
    this.name = name;
    this.entityId = entityId;
    this.entityType = entityType;
  }
}

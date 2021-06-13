export default class DownloadablePageSharedResource<T> {
  count: number;

  next: string;

  previous: string;

  results: T[];

  constructor(count: number, next: string, previous: string, results: T[]) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}

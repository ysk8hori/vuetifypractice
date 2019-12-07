export default class Sample {
  public array?: string[];
  public get length(): number {
    return this.array?.length ?? 0;
  }
}

export default class Sample {
  public array?: string[];
  public get length(): number | undefined {
    return this.array?.length;
  }
}

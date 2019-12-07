import Sample from "@/usecase/sample";

describe("sample.ts", () => {
  test("optional chaning", () => {
    const sample = new Sample();
    expect(sample.length).toBeUndefined();
  });
});

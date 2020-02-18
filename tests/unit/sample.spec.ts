import Sample from '@/usecase/sample';

describe('sample.ts', () => {
  test('optional chaning and nullish coalescing', () => {
    const sample = new Sample();
    expect(sample.length).toBe(0);
  });
});

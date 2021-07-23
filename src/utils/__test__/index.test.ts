import { setText } from '../index';

describe('Utils suite', () => {
  it('has the correct string', () => {
    const englishText = setText({ en: 'english', es: 'spanish' }, 'en');
    expect(englishText).toBe('english');
  });
});

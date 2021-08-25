import { render, fireEvent } from '@testing-library/react';

import Header from '../Header';

describe('Testing Header', () => {
  it('renders correctly', async() => {
    const { getByText } = render(<Header />);

    expect(getByText('AO HyS')).toBeDefined();
    expect(getByText('Projects')).toBeDefined();
    expect(getByText('Services')).toBeDefined();
    expect(getByText('Contact')).toBeDefined();
    expect(getByText('English')).toBeDefined();
  });

  it('changes language', () => {
    const { getByText, getAllByRole } = render(<Header />);
    const languageButton = getAllByRole('button')[0];
    fireEvent.click(languageButton);
    expect(getByText('Español')).toBeDefined();
    const spanishButton = getAllByRole('button')[2];
    fireEvent.click(spanishButton);
    expect(getByText('Español')).toBeDefined();
  });
});

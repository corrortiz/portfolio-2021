import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import {
  openSnackBar,
  setSnackBarMessage,
} from '../../store/slices/globalSlice';
import { setText } from '../../utils';

import SnackBar from '../SnackBar';

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <SnackBar />
    </Provider>,
  );
};

describe('Testing SnackBar', () => {
  const dispatch = store.dispatch;

  it('renders correctly', async () => {
    const { getByText } = renderComponent();
    dispatch(openSnackBar());
    expect(getByText('')).toBeDefined();
  });

  it('sets a message', async () => {
    const { getByText } = renderComponent();
    dispatch(setSnackBarMessage('new message'));
    expect(getByText('new message')).toBeDefined();
  });
});

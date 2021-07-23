import { store } from '../..';
import {
  changeLanguage,
  closeSnackBar,
  hideLoading,
  openSnackBar,
  setSnackBarMessage,
  showLoading,
} from '../globalSlice';

describe('Global Slice', () => {
  const dispatch = store.dispatch;

  it('has the correct initialState', () => {
    const state = store.getState().global;
    expect(state).toStrictEqual({
      language: 'en',
      openSnackBar: false,
      snackBarMessage: '',
      loading: false,
    });
  });

  it('changes the language', () => {
    dispatch(changeLanguage('Español'));
    const state = store.getState().global;
    expect(state.language).toBe('es');
  });

  it('open and close the snack bar', () => {
    dispatch(openSnackBar());
    const state = store.getState().global;
    expect(state.openSnackBar).toBe(true);
    dispatch(closeSnackBar());
    const newState = store.getState().global;
    expect(newState.openSnackBar).toBe(false);
  });

  it('changes the message for the snack bar', () => {
    dispatch(setSnackBarMessage('new message'));
    const state = store.getState().global;
    expect(state.snackBarMessage).toBe('new message');
  });

  it('shows and hide the loading state', () => {
    dispatch(showLoading());
    const state = store.getState().global;
    expect(state.loading).toBe(false);
    dispatch(hideLoading());
    const newState = store.getState().global;
    expect(newState.loading).toBe(false);
  });
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  language: string;
  openSnackBar: boolean;
  snackBarMessage: string;
  loading: boolean;
}

const initialState: GlobalState = {
  language: 'en',
  openSnackBar: false,
  snackBarMessage: '',
  loading: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload === 'Español' ? 'es' : 'en';
    },
    openSnackBar: (state) => {
      state.openSnackBar = true;
    },
    closeSnackBar: (state) => {
      state.openSnackBar = false;
    },
    setSnackBarMessage: (state, action: PayloadAction<string>) => {
      state.snackBarMessage = action.payload;
    },
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  changeLanguage,
  openSnackBar,
  closeSnackBar,
  setSnackBarMessage,
  showLoading,
  hideLoading,
} = globalSlice.actions;

export default globalSlice.reducer;

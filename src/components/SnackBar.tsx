import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { Close } from 'grommet-icons';
import { useAppSelector, useAppDispatch } from '../hooks';
import { closeSnackBar } from '../store/slices/globalSlice';

function SnackBar() {
  const { snackBarMessage, openSnackBar } = useAppSelector(
    (state) => state.global,
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeSnackBar());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={openSnackBar}
      autoHideDuration={6000}
      onClose={handleClose}
      message={snackBarMessage}
      action={
        <IconButton
          size='medium'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <Close color='brand' />
        </IconButton>
      }
    />
  );
}

export default SnackBar;

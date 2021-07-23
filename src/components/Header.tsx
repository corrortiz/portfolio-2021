import { Box, Heading, Menu, Anchor } from 'grommet';
import { ChatOption } from 'grommet-icons';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Contact, LocaleChange, Projects, Services } from '../assets';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  changeLanguage,
  openSnackBar,
  setSnackBarMessage,
} from '../store/slices/globalSlice';
import { setText } from '../utils';

const HeadingStyle = styled(Heading)`
  margin-right: auto;
`;

const NavigationStyle = styled.div`
  & > * {
    margin-right: 20px;
  }
`;

function Header() {
  const [language, setLanguage] = useState('English');
  const global = useAppSelector((state) => state.global);

  const dispatch = useAppDispatch();

  const handleChangeOfLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.innerText;
    setLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
    dispatch(setSnackBarMessage(setText(LocaleChange, global.language)));
    dispatch(openSnackBar());
  };

  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: 1 }}
    >
      <HeadingStyle level='1' margin='none' color='brand'>
        AO HyS
      </HeadingStyle>
      <NavigationStyle>
        <Anchor href='#' label={setText(Services, global.language)} />
        <Anchor href='#' label={setText(Projects, global.language)} />
        <Anchor href='#' label={setText(Contact, global.language)} />
      </NavigationStyle>
      <Menu
        label={language}
        icon={<ChatOption color='brand' />}
        items={[
          { label: 'Español', onClick: handleChangeOfLanguage },
          { label: 'English', onClick: handleChangeOfLanguage },
        ]}
      />
    </Box>
  );
}

export default Header;

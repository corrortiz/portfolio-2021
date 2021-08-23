import { Box, Heading, Menu, Anchor } from 'grommet';
import { ChatOption } from 'grommet-icons';
import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Contact, LocaleChange, Projects, Services } from '../assets';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  changeLanguage,
  openSnackBar,
  setSnackBarMessage,
} from '../store/slices/globalSlice';
import { device } from '../theme';
import { setText } from '../utils';

const HeadingStyle = styled(Heading)`
  margin-right: auto;
  cursor: pointer;
`;

const NavigationStyle = styled.div`
  & > * {
    margin-right: 20px;
  }
`;

const HeaderContainer = styled(Box)`
  @media screen and (${device.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

function Header() {
  const history = useHistory();
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

  const navigate = (path: string) => {
    history.push(path);
  };

  return (
    <HeaderContainer
      tag='header'
      direction='row'
      align='center'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: 1 }}
    >
      <HeadingStyle
        level='1'
        margin='none'
        color='brand'
        onClick={() => navigate('/')}
      >
        AO HyS
      </HeadingStyle>
      <NavigationStyle>
        <Anchor
          href='#'
          label={setText(Services, global.language)}
          onClick={() => navigate('services')}
        />
        <Anchor
          href='#'
          label={setText(Projects, global.language)}
          onClick={() => navigate('projects')}
        />
        <Anchor
          href='#'
          label={setText(Contact, global.language)}
          onClick={() => navigate('contact')}
        />
      </NavigationStyle>
      <Menu
        label={language}
        icon={<ChatOption color='brand' />}
        items={[
          { label: 'Español', onClick: handleChangeOfLanguage },
          { label: 'English', onClick: handleChangeOfLanguage },
        ]}
      />
    </HeaderContainer>
  );
}

export default Header;

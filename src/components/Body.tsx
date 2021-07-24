import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { Heading, Text, Button } from 'grommet';
import webdev from '../assets/lottie/webdev.json';
import { theme, device } from '../theme';

const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 10rem);
  padding: 2rem;

  @media screen and (${device['4k']}) {
    padding: 2rem 20%;
  }

  @media screen and (${device.laptop}) {
    padding: 2rem 5%;
  }

  @media screen and (${device.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const AStyled = styled.a`
  color: ${theme.global.colors.active};
`;

const TextSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 2rem;
`;

const LottieSection = styled.div``;

function Body() {
  return (
    <BodyContainer>
      <TextSection>
        <Heading style={{ marginBottom: 0 }} level={2} size='medium'>
          Welcome To
        </Heading>
        <Heading
          style={{ marginTop: '1rem', marginBottom: 0 }}
          level={2}
          size='large'
        >
          Personalized <AStyled>Software</AStyled>
        </Heading>
        <Heading style={{ marginTop: 0 }} level={2} size='large'>
          Development
        </Heading>
        <Text style={{ marginBottom: '2rem' }}>
          We make it easy for companies to transform their ideas into innovative
          solutions, in a sensitive, adequate and personalized way to meet the
          needs of each organization.
        </Text>
        <Button
          style={{ maxWidth: '200px' }}
          size='large'
          primary
          label='Contact Us'
        />
      </TextSection>
      <LottieSection>
        <Player
          autoplay
          loop
          src={webdev}
          style={{ height: '400px', width: '500px' }}
        />
      </LottieSection>
    </BodyContainer>
  );
}

export default Body;

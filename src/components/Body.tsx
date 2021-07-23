import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { Heading, Text } from 'grommet';
import webdev from '../assets/lottie/webdev.json';
import { theme, device } from '../theme';

const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 10rem);
  padding: 2rem 25%;

  & > * {
    margin-bottom: 2rem;
  }

  @media ${device.laptop} {
    flex-direction: column;
    padding: 2rem;
  }

  @media ${device.tablet} {
    padding: 3rem;
    flex-direction: row;
  }
`;

const AStyled = styled.a`
  color: ${theme.global.colors.active};
`;

const TextSection = styled.div`
  padding-top: 2rem;
`;

const LottieSection = styled.div`
  @media ${device.laptop} {
    align-self: center;
  }

  @media ${device.tablet} {
    align-self: flex-start;
  }
`;

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
        <Text>
          We make it easy for companies to transform their ideas into innovative
          solutions, in a sensitive, adequate and personalized way to meet the
          needs of each organization.
        </Text>
      </TextSection>
      <LottieSection>
        <Player
          autoplay
          loop
          src={webdev}
          style={{ height: '400px', width: '600px', paddingLeft: 100 }}
        />
      </LottieSection>
    </BodyContainer>
  );
}

export default Body;

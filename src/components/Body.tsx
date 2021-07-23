import styled from 'styled-components';
import { Goal, GoalHeader, GoalNext } from '../assets';
import { useAppSelector } from '../hooks';
import { setText } from '../utils';

const BodyContainer = styled.div`
  height: calc(100vh - 10rem);
  padding: 2rem 10rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

function Body() {
  const { language } = useAppSelector((state) => state.global);

  return (
    <BodyContainer>
      <h4>{setText(GoalHeader, language)}</h4>
      <p>{setText(Goal, language)}</p>
      <p>{setText(GoalNext, language)}</p>
    </BodyContainer>
  );
}

export default Body;

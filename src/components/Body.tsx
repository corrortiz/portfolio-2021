import style from "styled-components";
import { Goal, GoalHeader, GoalNext } from "../assets";
import { useAppSelector } from "../hooks";
import { setText } from "../utils";

function Body() {
  const { language } = useAppSelector((state) => state.global);

  const BodyContainer = style.div`
    padding: 2rem 10rem;

    & > * {
      margin-bottom: 2rem;
    }
  `;

  return (
    <BodyContainer>
      <h4>{setText(GoalHeader, language)}</h4>
      <p>{setText(Goal, language)}</p>
      <p>{setText(GoalNext, language)}</p>
    </BodyContainer>
  );
}

export default Body;

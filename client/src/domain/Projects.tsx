/* eslint-disable indent */
import styled from 'styled-components';
import { device } from '../theme';
import { useAllProjectsQuery } from '../generated/graphql';
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${device['4k']}) {
    padding: 2rem 10%;
  }

  @media screen and (${device.laptop}) {
    padding: 2rem 5%;
  }

  @media screen and (${device.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 2rem;
`;

function Projects() {
  const { loading, error, data } = useAllProjectsQuery();

  if (error) throw new Error(error.message);
  if (loading) <div>...loading</div>;

  return (
    <ProjectsContainer>
      {data?.projects?.length
        ? data?.projects?.map((project) => (
            <div key={project.id}>
              <TextSection>{project.title}</TextSection>
              <TextSection>{project.description}</TextSection>
              <img src={project.images} />
            </div>
          ))
        : null}
    </ProjectsContainer>
  );
}

export default Projects;

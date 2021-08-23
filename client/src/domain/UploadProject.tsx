import { Button, Form, TextArea, TextInput } from 'grommet';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { device } from '../theme';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  padding: 2rem 20%;

  @media screen and (${device['4k']}) {
    padding: 2rem 30%;
  }

  @media screen and (${device.laptop}) {
    padding: 2rem 15%;
  }

  @media screen and (${device.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0%;
  }

  & * {
    margin-bottom: 25px;
  }
`;

const SummitButtonWrapper = styled.div`
  align-self: center;
  margin-top: 10px;
`;

interface ProjectInput {
  projectName: string;
  projectDescription: string;
  projectURL: string;
  projectImage: string;
}

function UploadAProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectInput>();
  console.log(errors);

  return (
    <ProjectsContainer>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextInput
          id='text-input-project-name'
          placeholder='Project Name'
          {...register('projectName', { required: true })}
        />
        <TextArea
          id='text-area-description'
          placeholder='Project Description'
          {...register('projectDescription', { required: true })}
        />
        <TextInput
          id='text-input-project-url'
          placeholder='Project URL'
          {...register('projectURL', { required: true })}
        />
        <TextInput
          id='text-input-project-image'
          placeholder='Project Image'
          {...register('projectImage', { required: true })}
        />
        <SummitButtonWrapper>
          <Button type='submit' primary label='Submit' />
        </SummitButtonWrapper>
      </Form>
    </ProjectsContainer>
  );
}

export default UploadAProject;

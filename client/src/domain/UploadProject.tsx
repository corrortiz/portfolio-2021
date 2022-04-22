/* eslint-disable multiline-ternary */
import { FileInput } from '@blueprintjs/core';
import { Button, Form } from 'grommet';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FormInput from '../components/FormInput';
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
`;

const SummitButtonWrapper = styled.div`
  align-self: center;
  margin-top: 10px;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  padding: 30px;
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
    clearErrors,
    formState: { errors },
  } = useForm<ProjectInput>();

  const imgRef = useRef<any>();
  const [image, setImage] = useState<FileReader | null>(null);

  return (
    <ProjectsContainer>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          if (data) {
            clearErrors();
          }
        })}
      >
        <FormInput
          inputName='projectName'
          label='Project Name'
          error={errors.projectName ? 'This is required' : ''}
          icon='code'
          inputProps={{ ...register('projectName', { required: true }) }}
        />
        <FormInput
          inputName='projectDescription'
          label='Project Description'
          error={errors.projectDescription ? 'This is required' : ''}
          icon='add-to-artifact'
          inputProps={{ ...register('projectDescription', { required: true }) }}
        />
        <FormInput
          inputName='projectURL'
          label='URL'
          error={errors.projectURL ? 'This is required' : ''}
          icon='link'
          inputProps={{ ...register('projectURL', { required: true }) }}
        />
        <FileInput
          fill
          large
          onInputChange={(files: any) => {
            if (files) {
              const reader = new FileReader();
              if (imgRef && imgRef.current && imgRef.current.src) {
                reader.readAsDataURL(files.target.files[0]);
                imgRef.current.src = reader?.result || '';
              }
              setImage(reader);
            }
          }}
        />
        {image ? (
          <Image
            src={image.result as any}
            // @ts-ignore
            ref={imgRef}
            alt='Girl in a jacket'
            width='5000px'
            height='6000px'
          />
        ) : null}
        <SummitButtonWrapper>
          <Button type='submit' primary label='Submit' />
        </SummitButtonWrapper>
      </Form>
    </ProjectsContainer>
  );
}

export default UploadAProject;

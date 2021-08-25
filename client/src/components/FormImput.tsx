/* eslint-disable multiline-ternary */
import { TextInput, Text } from 'grommet';
import { ReactElement } from 'react';

interface FormInputProps {
  inputName: string;
  error: string;
  label: string;
}

function FormInput({ inputName, label, error }: FormInputProps): ReactElement {
  return (
    <>
      <TextInput id={inputName} placeholder={label} />
      {error ? (
        <Text size='small' color='red'>
          {error}
        </Text>
      ) : null}
    </>
  );
}

export default FormInput;

/* eslint-disable multiline-ternary */
import {
  FormGroup,
  IconName,
  InputGroup,
  Intent,
  MaybeElement,
} from '@blueprintjs/core';
import { ReactElement } from 'react';

interface FormInputProps {
  inputName: string;
  label: string;
  icon: IconName | MaybeElement;
  inputProps: any;
  error?: string;
}

function FormInput({
  inputName,
  label,
  icon,
  error,
  inputProps,
}: FormInputProps): ReactElement {
  return (
    <FormGroup
      label={label}
      labelFor={`text-input-${inputName}`}
      intent={error ? Intent.DANGER : Intent.NONE}
      helperText={error}
    >
      <InputGroup
        id={`text-input-${inputName}`}
        placeholder='Project Name'
        intent={error ? Intent.DANGER : Intent.NONE}
        leftIcon={icon}
        large
        round
        {...inputProps}
      />
    </FormGroup>
  );
}

export default FormInput;

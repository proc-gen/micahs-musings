import React from 'react';

import {
  FormControl,
  FormLabel,
  Select,
  InputGroup,
  SelectProps,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

export interface IInputSelectProps extends SelectProps {
  label: JSX.Element | string;
  tooltip?: JSX.Element | string;
}

export const InputSelect: React.FC<IInputSelectProps> = ({
  children,
  id,
  label,
  tooltip,
  ...rest
}) => {
  return (
    <FormControl id={id}>
      {tooltip !== undefined && (
        <Tooltip label={tooltip}>
          <FormLabel>{label}</FormLabel>
        </Tooltip>
      )}
      {tooltip === undefined && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Select
          name={id}
          id={id}
          {...rest}
          variant="filled"
          sx={{
            backgroundColor: useColorModeValue('blackAlpha', 'whiteAlpha'),
            ':hover': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
            },
            ':focus': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
            },
          }}
        >
          {children}
        </Select>
      </InputGroup>
    </FormControl>
  );
};

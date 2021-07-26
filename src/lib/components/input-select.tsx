import React from 'react';

import { FormControl, FormLabel, Select, InputGroup, SelectProps, Tooltip, useColorModeValue } from '@chakra-ui/react';

export interface IInputSelectProps extends SelectProps {
  label: JSX.Element | string;
  tooltip?: JSX.Element | string;
}

export const InputSelect: React.FC<IInputSelectProps> = ({ children, id, label, tooltip, ...rest }) => {
  return (
    <FormControl id={id} margin="0.5em">
      {tooltip !== undefined && (
        <Tooltip label={tooltip}>
          <FormLabel htmlFor={id}>{label}</FormLabel>
        </Tooltip>
      )}
      {tooltip === undefined && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        <Select
          name={id}
          id={id}
          {...rest}
          variant="filled"
          border="none"
          sx={{
            backgroundColor: useColorModeValue('blackAlpha', 'gray.900'),
            ':hover': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px solid',
              borderColor: useColorModeValue('green.500', 'green.500'),
            },
            ':focus': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px solid',
              borderColor: useColorModeValue('green.500', 'green.500'),
            },
          }}
        >
          {children}
        </Select>
      </InputGroup>
    </FormControl>
  );
};

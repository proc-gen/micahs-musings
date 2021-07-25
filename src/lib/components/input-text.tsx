import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
  InputLeftAddon,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

export interface IInputProps extends InputProps {
  label: JSX.Element | string;
  tooltip?: JSX.Element | string;
  rightAddon?: JSX.Element | string;
  leftAddon?: JSX.Element | string;
}

export const InputText: React.FC<IInputProps> = ({ children, id, label, tooltip, leftAddon, rightAddon, ...rest }) => {
  const addonColor = useColorModeValue('gray.200', 'gray.600');
  return (
    <FormControl id={id} margin="0.5em">
      {tooltip !== undefined && (
        <Tooltip label={tooltip}>
          <FormLabel>{label}</FormLabel>
        </Tooltip>
      )}
      {tooltip === undefined && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {leftAddon !== undefined && <InputLeftAddon children={leftAddon} backgroundColor={addonColor} />}
        <Input
          id={id}
          name={id}
          variant="filled"
          border="none"
          {...rest}
          sx={{
            backgroundColor: useColorModeValue('gray.100', 'gray.900'),
            ':hover': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px inset',
              borderColor: useColorModeValue('green.500', 'green.500'),
            },
            ':focus': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px inset',
              borderColor: useColorModeValue('green.500', 'green.500'),
            },
          }}
        />
        {rightAddon !== undefined && <InputRightAddon children={rightAddon} backgroundColor={addonColor} />}
      </InputGroup>
    </FormControl>
  );
};

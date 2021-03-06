import React, { useRef } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputLeftAddon,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaFile } from 'react-icons/fa';
import { createRef } from 'react';

export interface IInputFileProps extends InputProps {
  label: JSX.Element | string;
  tooltip?: JSX.Element | string;
  acceptedFileTypes?: string;
  onFileUpload: (selectorFiles: FileList | null) => any;
  text: string | undefined;
}

export const InputFile: React.FC<IInputFileProps> = ({
  children,
  id,
  label,
  tooltip,
  acceptedFileTypes,
  onFileUpload,
  text,
  ...rest
}) => {
  const addonColor = useColorModeValue('gray.200', 'gray.600');
  const inputRef = createRef<HTMLInputElement>();

  return (
    <FormControl id={id} margin="0.5em">
      {tooltip !== undefined && (
        <Tooltip label={tooltip}>
          <FormLabel htmlFor={id}>{label}</FormLabel>
        </Tooltip>
      )}
      {tooltip === undefined && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        <InputLeftAddon children={<FaFile />} backgroundColor={addonColor} pointerEvents="none" />
        <input
          type="file"
          accept={acceptedFileTypes}
          ref={inputRef}
          id={id}
          name={id}
          onChange={(e) => onFileUpload(e.target.files)}
          style={{ display: 'none' }}
        />
        <Input
          variant="filled"
          border="none"
          readOnly
          onClick={() => {
            inputRef?.current?.click();
          }}
          value={text}
          {...rest}
          sx={{
            backgroundColor: useColorModeValue('gray.100', 'gray.900'),
            ':hover': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px inset',
              borderColor: useColorModeValue('green.500', 'green.500'),
              cursor: 'pointer',
            },
            ':focus': {
              backgroundColor: useColorModeValue('white', 'gray.700'),
              borderBottom: '2px inset',
              borderColor: useColorModeValue('green.500', 'green.500'),
            },
          }}
        />
      </InputGroup>
    </FormControl>
  );
};

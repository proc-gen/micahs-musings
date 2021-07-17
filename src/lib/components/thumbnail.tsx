import React from 'react';
import {
  Image,
  ImageProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

export interface IThumbnailProps extends ImageProps {
  source: string;
  altText: string;
}

export const Thumbnail: React.FC<IThumbnailProps> = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        src={props.source}
        alt={props.altText}
        onClick={onOpen}
        _hover={{
          border: 'solid 2px',
          borderColor: useColorModeValue('gray.100', 'gray.800'),
          transition: '0.1s',
        }}
        props
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.altText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={props.source} alt={props.altText} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

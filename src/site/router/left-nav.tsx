import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Link,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export interface ILeftNavProps {}

export const LeftNav: React.FC<ILeftNavProps> = () => {
  const prefix = window.location.href.includes('/micahs-musings')
    ? '/micahs-musings'
    : '/';
  return (
    <SimpleGrid>
      <VStack align="stretch">
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Link as={ReactLink} to={prefix}>
                Home
              </Link>
            </AccordionButton>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton w="100%">
              Programming
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel w="100%">
              <AccordionItem>
                <AccordionButton>
                  <Link as={ReactLink} to={prefix + '/programming'}>
                    Overview
                  </Link>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton w="100%">
                  Mazes
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel w="100%">
                  <AccordionItem>
                    <AccordionButton>
                      <Link as={ReactLink} to={prefix + '/programming/mazes'}>
                        Overview
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Link
                        as={ReactLink}
                        to={prefix + '/programming/mazes/generator'}
                      >
                        Generator
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Link
                        as={ReactLink}
                        to={prefix + '/programming/mazes/algorithms'}
                      >
                        Algorithms
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton w="100%">
                  <Link
                    as={ReactLink}
                    to={prefix + '/programming/terrain-generation'}
                  >
                    Terrain Generation
                  </Link>
                </AccordionButton>
              </AccordionItem>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton w="100%">
              Writing
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel w="100%">
              <AccordionButton>
                <Link as={ReactLink} to={prefix + '/writing'} w="100%">
                  Overview
                </Link>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Link as={ReactLink} to={prefix + '/about-me'}>
                About Me
              </Link>
            </AccordionButton>
          </AccordionItem>
        </Accordion>
      </VStack>
    </SimpleGrid>
  );
};

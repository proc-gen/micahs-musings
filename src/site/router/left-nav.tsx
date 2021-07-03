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
  return (
    <SimpleGrid>
      <VStack align="stretch">
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Link as={ReactLink} to="/">
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
                  <Link as={ReactLink} to="/programming">
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
                      <Link as={ReactLink} to="/programming/mazes">
                        Overview
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Link as={ReactLink} to="/programming/mazes/generator">
                        Generator
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Link as={ReactLink} to="/programming/mazes/algorithms">
                        Algorithms
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton w="100%">
                  <Link as={ReactLink} to="/programming/terrain-generation">
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
                <Link as={ReactLink} to="/writing" w="100%">
                  Overview
                </Link>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Link as={ReactLink} to="/about-me">
                About Me
              </Link>
            </AccordionButton>
          </AccordionItem>
        </Accordion>
      </VStack>
    </SimpleGrid>
  );
};

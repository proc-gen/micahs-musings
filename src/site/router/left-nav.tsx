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
              Mazes
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel w="100%">
              <AccordionItem>
                <AccordionButton>
                  <Link as={ReactLink} to="/mazes">
                    Overview
                  </Link>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Link as={ReactLink} to="/mazes/generator">
                    Generator
                  </Link>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Link as={ReactLink} to="/mazes/algorithms">
                    Algorithms
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
              <AccordionItem>
                <AccordionButton>
                  <Link as={ReactLink} to="/writing" w="100%">
                    Overview
                  </Link>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton w="100%">
                  When Worlds Collide
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel w="100%">
                  <AccordionItem>
                    <AccordionButton>
                      <Link
                        as={ReactLink}
                        to="/writing/when-worlds-collide/chapter-1"
                        w="100%"
                      >
                        Chapter 1
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                </AccordionPanel>
              </AccordionItem>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </SimpleGrid>
  );
};

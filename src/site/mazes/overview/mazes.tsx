import React from 'react';
import { Container, Link, SimpleGrid } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  Paragraph,
  LinkButton,
} from '../../../lib/components';

export const Mazes: React.FC = () => {
  return (
    <Card maxW="container.lg" centered>
      <CardHeader>Mazes - Overview</CardHeader>
      <CardBody>
        <SimpleGrid columns={2} spacing="1em" padding="1em">
          <LinkButton href="/mazes/generator" text="Generator" />
          <LinkButton href="/mazes/algorithms" text="Algorithms" />
        </SimpleGrid>
        <Container textAlign="left" maxW="container.lg" fontSize="md">
          <Paragraph>
            Back in May 2020, I was perusing through Amazon looking for new
            books to read whether they were for something to learn or just for
            enjoyment. I ended up coming across{' '}
            <Link
              href="https://www.amazon.com/Mazes-Programmers-Twisty-Little-Passages/dp/1680500554"
              isExternal
            >
              <u>Mazes for Programmers: Code Your Own Twisty Little Passages</u>
            </Link>{' '}
            by Jamis Buck and thought it would be something cool to try out.
          </Paragraph>
          <Paragraph>
            At first, I was a little turned off that all the provided code was
            written in Ruby. As many reviews stated, this was an annoyance to
            them as well. But, that actually ended up making it more fun for me
            overall. Not only was I learning the algorithms described by the
            author to generate mazes, I was also challenging my problem solving
            skills by transferring the provided code into my current language of
            choice, C#.
          </Paragraph>
          <Paragraph>
            It didn't take long before I was spending time taking the mazes and
            putting them in 3D so that I could feel like I was walking through
            games of my childhood like{' '}
            <Link href="http://advsys.net/ken/klab.htm" isExternal>
              <u>Ken's Labyrinth</u>
            </Link>{' '}
            and{' '}
            <Link href="https://www.dgray.com/n3dpage.htm" isExternal>
              <u>Nitemare 3D</u>
            </Link>
            . That iteration didn't make it much further than a console
            interface to setup the maze and then going into fullscreen mode.
            Still, it was fun to be able to make something and play it, which is
            something I hadn't done in several years.
          </Paragraph>
          <Paragraph>
            After inevitably getting bogged down trying to do fancy things with
            OpenGL and GLSL shaders, I took a few months away from the project
            before beginning to work on a WinForms version of the application.
            That was another learning experience, because I hadn't made a
            WinForms application for anything since the first half of high
            school. Compared to the VB 6 code I had worked on it was a breeze in
            .Net Core. This version of the generator allowed for all the
            settings as the first version in addition to separating a map out
            into multiple regions. The goal behind that was to allow for more
            complex generation so that it could possibly be used for a
            rogue-like game.
          </Paragraph>
          <Paragraph>
            Jumping ahead to July 2021, the current goal is to port the current
            version of the C# library I put together into Typescript. So far,
            the hardest part has been editing images pixel by pixel in the same
            way allowed by System.Drawing.Bitmap in C# while also trying to
            respect how data is supposed to flow in a React application.
          </Paragraph>
          <Paragraph>
            If you've stuck around this long, you should jump to either the{' '}
            <Link href="/programming/mazes/generator">
              <u>Generator</u>
            </Link>{' '}
            to play around with all sorts of settings to create your own mazes,
            or you can head off to the{' '}
            <Link href="/programming/mazes/generator">
              <u>Algorithms</u>
            </Link>{' '}
            section where I give a brief explanation of each generator
            implemented and some other pieces of the code. Enjoy!
          </Paragraph>
        </Container>
      </CardBody>
    </Card>
  );
};

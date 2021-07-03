import React from 'react';
import { Route } from 'react-router-dom';

import { LayoutMain } from './layout-main';
import { Home } from '../home/home';
import { AboutMe } from '../about-me/about-me';
import { Programming } from '../programming/programming';
import { Mazes } from '../programming/mazes/overview/mazes';
import { TerrainGeneration } from '../programming/terrain-generation/terrain-generation';
import { Writing } from '../writing/writing';
import { Generator } from '../programming/mazes/generator/generator';
import { Algorithms } from '../programming/mazes/algorithms/algorithms';

export const RouterMain: React.FC = () => {
  return (
    <LayoutMain>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />

      <Route exact path="/programming" component={Programming} />
      <Route exact path="/programming/mazes" component={Mazes} />
      <Route exact path="/programming/mazes/generator" component={Generator} />
      <Route
        exact
        path="/programming/mazes/algorithms"
        component={Algorithms}
      />
      <Route
        exact
        path="/programming/terrain-generation"
        component={TerrainGeneration}
      />
      <Route exact path="/writing" component={Writing} />
    </LayoutMain>
  );
};

import React from 'react';
import { Route } from 'react-router-dom';

import { LayoutMain } from './layout-main';
import { Home } from '../home/home';
import { AboutMe } from '../about-me/about-me';
import { Mazes } from '../mazes/overview/mazes';
import { Generator } from '../mazes/generator/generator';
import { Algorithms } from '../mazes/algorithms/algorithms';

import { Writing } from '../writing/writing';
import { Chapter1WWC } from '../writing/when-worlds-collide/writing';

export const RouterMain: React.FC = () => {
  return (
    <LayoutMain>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />

      <Route exact path="/mazes" component={Mazes} />
      <Route exact path="/mazes/generator" component={Generator} />
      <Route exact path="/mazes/algorithms" component={Algorithms} />

      <Route exact path="/writing" component={Writing} />
      <Route
        exact
        path="/writing/when-worlds-collide/chapter-1"
        component={Chapter1WWC}
      />
    </LayoutMain>
  );
};

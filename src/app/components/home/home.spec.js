import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import Home from './home.js';

const render = reactDom.renderToStaticMarkup;

test('Home', assert => {
  const homeText = 'New ...Home page';

  const el = <Home />;
  const $ = dom.load(render(el));
  const output = $('h1').html();

  const actual = output;
  const expected = homeText;

  assert.equal(actual, expected,
    'should output the correct Home text');

  assert.end();
});

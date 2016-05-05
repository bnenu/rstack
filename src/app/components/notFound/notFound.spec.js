import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import NotFound from './notFound'

const render = reactDom.renderToStaticMarkup

test('NotFound', assert => {
  const notFoundText = 'Route not found :/'

  const el = <NotFound />
  const $ = dom.load(render(el))
  const output = $('p').html()

  const actual = output
  const expected = notFoundText

  assert.equal(actual, expected,
    'should output the correct NotFound component text');

  assert.end()
})

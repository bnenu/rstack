import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import Header from './header'

const render = reactDom.renderToStaticMarkup

test('Header', assert => {
  const headerText = 'Header text'

  const el = <Header title={headerText}/>
  const $ = dom.load(render(el))
  const output = $('h1').html()

  const actual = output
  const expected = headerText

  assert.equal(actual, expected,
    'should output the correct Header text');

  assert.end()
})

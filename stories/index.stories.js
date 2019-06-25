import React from 'react'
import { storiesOf } from '@storybook/react'
import Selector from '../src'

const data = [
  { category: 'calculate', name: 'card', value: 89519 },
  { category: 'calculate', name: 'array', value: 49024 },
  { category: 'calculate', name: 'revolutionary', value: 80686 },
  { category: 'calculate', name: 'Movies', value: 54947 },
  { category: 'calculate', name: 'Innovative', value: 50595 },
  { category: 'lavender', name: 'Grocery', value: 90170 },
  { category: 'lavender', name: 'input', value: 56963 },
  { category: 'lavender', name: 'Ergonomic Metal Mouse', value: 46594 },
  { category: 'lavender', name: 'dynamic', value: 98821 },
  { category: 'lavender', name: 'Consultant', value: 48437 },
  { category: 'Home Loan Account', name: 'Roads', value: 67238 },
  { category: 'Home Loan Account', name: 'Corners', value: 42862 },
  { category: 'Home Loan Account', name: 'Rubber', value: 28415 },
  { category: 'Home Loan Account', name: 'HTTP', value: 74444 },
]

storiesOf('Selector', module)
  .add('With data only', () => <Selector data={data} />)
  .add('With custom title', () => <Selector data={data} selectedTitle="Cart" />)
  .add('Custom getSelected function', () => (
    <Selector
      data={data}
      getSelected={values => alert(JSON.stringify(values))}
    />
  ))

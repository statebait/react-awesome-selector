import React from 'react'
import Selector from '../src'
import './utils/wdyr'

export default {
  title: 'Selector',
  component: Selector,
}

const data = [
  { category: 'Calculate', name: 'Card', value: 89519 },
  { category: 'Calculate', name: 'Array', value: 49024 },
  { category: 'Calculate', name: 'Revolutionary', value: 80686 },
  { category: 'Calculate', name: 'Movies', value: 54947 },
  { category: 'Calculate', name: 'Innovative', value: 50595 },
  { category: 'Lavender', name: 'Grocery', value: 90170 },
  { category: 'Lavender', name: 'Input', value: 56963 },
  { category: 'Lavender', name: 'Ergonomic Metal Mouse', value: 46594 },
  { category: 'Lavender', name: 'Dynamic', value: 98821 },
  { category: 'Lavender', name: 'Consultant', value: 48437 },
  { category: 'Home Loan Account', name: 'Roads', value: 67238 },
  { category: 'Home Loan Account', name: 'Corners', value: 42862 },
  { category: 'Home Loan Account', name: 'Rubber', value: 28415 },
  { category: 'Home Loan Account', name: 'HTTP', value: 74444 },
]

export const WithDataOnly = () => (
  <Selector data={data} onChange={(values) => console.log(values)} />
)

export const WithCustomTitle = () => (
  <Selector
    data={data}
    selectTitle="Items"
    selectedTitle="Cart"
    onChange={(values) => console.log(values)}
  />
)

export const WithCategories = () => {
  return (
    <Selector
      data={data}
      categorize
      selectTitle="Items"
      selectedTitle="Cart"
      onChange={(values) => console.log(values)}
    />
  )
}

# React Awesome Selector

[![npm version](https://badge.fury.io/js/react-awesome-selector.svg)](https://badge.fury.io/js/react-awesome-selector)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

A selector component built with ReactJS.

## [Examples (Storybook)](https://statebait.github.io/react-awesome-selector)

## Getting started

To install:

```bash
npm install react-awesome-selector
```

-Or with yarn-

```bash
yarn add react-awesome-selector
```

### Usage

```jsx
import React from 'react'
import Selector from 'react-awesome-selector'
import 'react-awesome-selector/dist/style.css'

const data = [
  { category: 'calculate', name: 'card', value: 89519 },
  { category: 'calculate', name: 'array', value: 49024 },
  { category: 'lavender', name: 'grocery', value: 90170 },
  { category: 'lavender', name: 'input', value: 56963 },
]

export default function Main() {
  return (
    <Selector
      data={data}
      selectTitle="Items"
      selectedTitle="Cart"
      onChange={(values) => console.log(values)}
    />
  )
}
```

Props:

```js
Selector.propTypes = {
  /**
   * Data input for the selector
   */
  data: PropTypes.array,
  /**
   * Title for the select list
   */
  selectTitle: PropTypes.string,
  /**
   * Title for the selected list
   */
  selectedTitle: PropTypes.string,
  /**
   * Function for getting the selected values when anything changes
   */
  onChange: PropTypes.func,
}

Selector.defaultProps = {
  data: [],
  selectTitle: '',
  selectedTitle: '',
  onChange: () => {},
}
```

## License

This project is licensed under the MIT License - Copyright (c) 2020 Mohamed Shadab

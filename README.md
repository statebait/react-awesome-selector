# React Awesome Selector

A selector component.

> This project was done as part of a task in an interview process. Didn't get the job but thought will continue working on it.

To install:

```bash
npm install react-awesome-selector
```

-Or with yarn-

```bash
yarn add react-awesome-selector
```

Props:

```js
Selector.propTypes = {
  data: PropTypes.array,
  selectedTitle: PropTypes.string,
  ejectValues: PropTypes.func,
}

Selector.defaultProps = {
  data: [],
  selectedTitle: 'Selected',
  getSelected: function(values) {
    console.log('Selected Values: ', values)
  },
}
```

Better docs coming soon.

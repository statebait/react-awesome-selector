import React from 'react'
import { DataProvider, DataContext } from './DataContext.jsx'
import SelectList from './SelectList.jsx'
import SelectedList from './SelectedList.jsx'
import PropTypes from 'prop-types'
import './style.scss'

const SelectorChild = (props) => {
  const [state, setState] = React.useState({ items: [], categories: [] })
  const { initList, ...context } = React.useContext(DataContext)

  // Sanitizes data
  React.useEffect(() => {
    let items = props.data
    let tempCategories = []
    let categories = []
    let m = 0
    let n = 0
    items.map((item) => {
      if (!tempCategories.includes(item.category)) {
        tempCategories.push(item.category)
        categories.push({
          name: item.category,
          key: m,
        })
        m++
      }
      item.key = n
      return n++
    })
    setState({ items, categories })
    initList(items)
  }, [props.data, initList])

  const handleSubmit = () => props.getSelected(context.selectedList)

  const { categories } = state
  return (
    <>
      <div className="flex">
        <SelectList items={context.selectList} categories={categories} />
        <SelectedList
          title={props.selectedTitle}
          items={context.selectedList}
        />
      </div>
      <button
        className="react-awesome-selector-submit-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  )
}

function Selector(props) {
  return (
    <DataProvider>
      <div className="react-awesome-selector-wrapper">
        <SelectorChild
          selectedTitle={props.selectedTitle}
          data={props.data}
          getSelected={props.getSelected}
        />
      </div>
    </DataProvider>
  )
}

Selector.propTypes = {
  /**
   * Data input for the selector
   */
  data: PropTypes.array,
  /**
   * Title for the selected list
   */
  selectedTitle: PropTypes.string,
  /**
   * Function for getting the values of the selected values
   */
  getSelected: PropTypes.func,
}

Selector.defaultProps = {
  data: [],
  selectedTitle: 'Selected',
  getSelected: function (values) {
    console.log('Selected Values: ', values)
  },
}

export default Selector

import React from 'react'
import { DataProvider, DataContext } from './DataContext.jsx'
import SelectList from './SelectList.jsx'
import SelectedList from './SelectedList.jsx'
import PropTypes from 'prop-types'
import './style.scss'

const SelectorChild = (props) => {
  const { initialize, selectedList } = React.useContext(DataContext)
  const { data, categorize, selectedTitle, selectTitle, onChange } = props

  // Sanitizes data
  React.useEffect(() => {
    // Check if name and value properties exist on all items in the data array
    if (!data.every((item) => item.name && item.value)) {
      throw new Error('name or value missing from at least one item')
    }
    // Check if the category property exist on all items in the data array if categorize is set to true
    if (categorize) {
      if (!data.every((item) => item.category)) {
        throw new Error('category missing from at least one item')
      }
    }
    let items = []
    let categories = []
    for (let i = 0; i < data.length; i++) {
      if (categorize && !categories.includes(data[i].category)) {
        categories.push(data[i].category)
      }
      items.push({ ...data[i], key: i })
    }
    initialize({ selectList: items, categories })
  }, [data, initialize, categorize])

  // onChange effect
  React.useEffect(() => {
    onChange(selectedList)
  }, [onChange, selectedList])

  return (
    <>
      <SelectList categorize={categorize} title={selectTitle} />
      <SelectedList title={selectedTitle} />
    </>
  )
}

function Selector(props) {
  return (
    <DataProvider>
      <div className="react-awesome-selector-wrapper">
        <SelectorChild {...props} />
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
   * Whether to display categories in the select list
   */
  categorize: PropTypes.bool,
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
  categorize: false,
  selectTitle: '',
  selectedTitle: '',
  onChange: () => {},
}

export default Selector

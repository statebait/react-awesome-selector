import React from 'react'
import { DataProvider, DataContext } from './DataContext.jsx'
import SelectList from './SelectList.jsx'
import SelectedList from './SelectedList.jsx'
import PropTypes from 'prop-types'
import './style.scss'

const SelectorChild = (props) => {
  const { initialize, selectedList } = React.useContext(DataContext)
  const { data, selectedTitle, selectTitle, onChange } = props

  // Sanitizes data
  React.useEffect(() => {
    let items = []
    let categories = []
    for (let i = 0; i < data.length; i++) {
      if (!categories.includes(data[i].category)) {
        categories.push(data[i].category)
      }
      items.push({ ...data[i], key: i })
    }
    initialize({ selectList: items, categories })
  }, [data, initialize])

  // onChange effect
  React.useEffect(() => {
    onChange(selectedList)
  }, [onChange, selectedList])

  return (
    <>
      <SelectList title={selectTitle} />
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

export default Selector

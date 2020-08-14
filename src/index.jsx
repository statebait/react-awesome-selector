import React from 'react'
import { DataProvider, DataContext } from './DataContext.jsx'
import SelectList from './SelectList.jsx'
import SelectedList from './SelectedList.jsx'
import PropTypes from 'prop-types'
import './style.scss'

const SelectorChild = (props) => {
  const { initialize, ...context } = React.useContext(DataContext)
  const { data, selectedTitle, getSelected } = props

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

  const handleSubmit = () => getSelected(context.selectedList)

  return (
    <>
      <div className="react-awesome-selector-flex">
        <SelectList />
        <SelectedList title={selectedTitle} />
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

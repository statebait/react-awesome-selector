import React from 'react'
import { DataProvider, DataContext } from './DataContext.jsx'
import SelectList from './SelectList.jsx'
import SelectedList from './SelectedList.jsx'
import PropTypes from 'prop-types'
import './style.scss'

class SelectorChild extends React.Component {
  state = {
    items: [],
    categories: [],
  }

  componentDidMount() {
    this.sanitizeData()
  }

  sanitizeData = () => {
    let items = this.props.data
    let tempCategories = []
    let categories = []
    let m = 0
    let n = 0
    items.map(item => {
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
    this.setState({ items, categories }, () => {
      this.props.context.initialPopulate(this.state.items)
    })
  }

  render() {
    const { categories } = this.state
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div>
            <SelectList
              items={this.props.context.selectList}
              categories={categories}
            />
          </div>
          <div>
            <SelectedList
              title={this.props.selectedTitle}
              items={this.props.context.selectedList}
            />
          </div>
        </div>
      </div>
    )
  }
}

function Selector(props) {
  return (
    <DataProvider>
      <DataContext.Consumer>
        {context => (
          <div className="react-awesome-selector-wrapper">
            <SelectorChild
              selectedTitle={props.selectedTitle}
              context={context}
              data={props.data}
            />
            <button
              className="react-awesome-selector-submit-button"
              onClick={() => {
                props.getSelected(context.selectedList)
              }}
            >
              Submit
            </button>
          </div>
        )}
      </DataContext.Consumer>
    </DataProvider>
  )
}

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

export default Selector

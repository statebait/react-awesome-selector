import React from 'react'
import { DataProvider, DataContext } from './DataContext'
import SelectList from './SelectList'
import SelectedList from './SelectedList'
import PropTypes from 'prop-types'
import './style.css'

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
            <SelectedList items={this.props.context.selectedList} />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              console.log(this.props.context.selectedList)
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function Selector(props) {
  return (
    <DataProvider>
      <DataContext.Consumer>
        {context => <SelectorChild context={context} data={props.data} />}
      </DataContext.Consumer>
    </DataProvider>
  )
}

Selector.propTypes = {
  data: PropTypes.array,
}

Selector.defaultProps = {
  data: [],
}

export default Selector

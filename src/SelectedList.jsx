import React from 'react'
import { DataContext } from './DataContext.jsx'
import Item from './Item.jsx'

class SelectedList extends React.Component {
  state = {
    items: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.setState({ items: this.props.items })
    }
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <div className="react-awesome-selector-selected-list">
            <span className="react-awesome-selector-selected-list-title">
              {this.props.title}
            </span>
            {this.state.items.map(item => {
              return (
                <Item
                  key={item.key}
                  selected
                  onIconClick={() => {
                    context.removeSelected(item)
                  }}
                >
                  {item.name}
                </Item>
              )
            })}
          </div>
        )}
      </DataContext.Consumer>
    )
  }
}

export default SelectedList

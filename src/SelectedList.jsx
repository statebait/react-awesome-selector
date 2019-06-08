import React from 'react'
import { DataContext } from './DataContext'

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
          <div style={{ width: 300 }}>
            {this.state.items.map(item => {
              return (
                <div>
                  {item.name}
                  <span
                    onClick={() => {
                      return context.removeSelected(item)
                    }}
                  >
                    <img
                      src={require('./assets/icons/times.svg')}
                      className="accordion-icon"
                      alt="none"
                    />
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </DataContext.Consumer>
    )
  }
}

export default SelectedList

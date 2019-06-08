import React from 'react'
import { DataContext } from './DataContext'
import Accordion from './Accordion'

class SelectList extends React.Component {
  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <div>
            {this.props.categories.map(category => {
              return (
                <div>
                  <Accordion title={category.name}>
                    {this.props.items.map(item => {
                      if (category.name === item.category) {
                        return (
                          <div>
                            {item.name}
                            <span
                              onClick={() => {
                                return context.addSelected(item)
                              }}
                            >
                              <img
                                src={require('./assets/icons/plus-solid.svg')}
                                className="accordion-icon"
                                alt="none"
                              />
                            </span>
                          </div>
                        )
                      }
                    })}
                  </Accordion>
                </div>
              )
            })}
          </div>
        )}
      </DataContext.Consumer>
    )
  }
}

export default SelectList

import React from 'react'
import { DataContext } from './DataContext.jsx'
import Category from './Category.jsx'
import Item from './Item.jsx'
class SelectList extends React.Component {
  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <div className="">
            {this.props.categories.map(category => {
              return (
                <div>
                  <Category title={category.name}>
                    {this.props.items.map(item => {
                      if (category.name === item.category) {
                        return (
                          <Item
                            onIconClick={() => {
                              context.addSelected(item)
                            }}
                          >
                            {item.name}
                          </Item>
                        )
                      }
                    })}
                  </Category>
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

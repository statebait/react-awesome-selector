import React from 'react'
import { DataContext } from './DataContext.jsx'
import Category from './Category.jsx'
import Item from './Item.jsx'

function SelectList(props) {
  return (
    <DataContext.Consumer>
      {context => (
        <div>
          {props.categories.map(category => {
            return (
              <div key={category.key}>
                <Category title={category.name}>
                  {props.items.map(item => {
                    if (category.name === item.category) {
                      return (
                        <Item
                          key={item.key}
                          onIconClick={() => {
                            context.addSelected(item)
                          }}
                        >
                          {item.name}
                        </Item>
                      )
                    } else {
                      return null
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

export default SelectList

import React from 'react'
import Category from './Category.jsx'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

function SelectList(props) {
  return (
    <DataContext.Consumer>
      {(context) => (
        <div>
          {props.categories.map((category) => {
            return (
              <Category key={category.key} title={category.name}>
                {props.items.map((item) => {
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
            )
          })}
        </div>
      )}
    </DataContext.Consumer>
  )
}

export default SelectList

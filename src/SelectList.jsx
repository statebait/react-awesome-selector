import React from 'react'
import Category from './Category.jsx'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

function SelectList() {
  return (
    <DataContext.Consumer>
      {(context) => {
        return (
          <div>
            {context.categories.map((category, categoryIndex) => {
              return (
                <Category key={categoryIndex} title={category}>
                  {context.selectList.map((item) => {
                    if (category === item.category) {
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
        )
      }}
    </DataContext.Consumer>
  )
}

export default SelectList

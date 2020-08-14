import React from 'react'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  return (
    <DataContext.Consumer>
      {(context) => (
        <div className="react-awesome-selector-selected-list">
          <span className="react-awesome-selector-selected-list-title">
            {props.title}
          </span>
          {context.selectedList.map((item) => {
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

export default SelectedList

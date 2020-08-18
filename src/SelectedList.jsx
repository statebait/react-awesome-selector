import React from 'react'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  const context = React.useContext(DataContext)

  return (
    <div className="react-awesome-selector-selected-list">
      <div className="react-awesome-selector-selected-list-title">
        {props.title}
      </div>
      <div className="react-awesome-selector-selected-list-items">
        {context.selectedList.map((item) => {
          const handleIconClick = () => context.removeSelected(item)
          return (
            <Item key={item.key} selected onIconClick={handleIconClick}>
              {item.name}
            </Item>
          )
        })}
      </div>
    </div>
  )
}

export default SelectedList

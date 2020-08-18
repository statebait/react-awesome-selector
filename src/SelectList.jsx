import React from 'react'
import Category from './Category.jsx'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

function SelectList(props) {
  const context = React.useContext(DataContext)

  return (
    <div className="react-awesome-selector-select-list">
      <div className="react-awesome-selector-select-list-title">
        {props.title}
      </div>
      {context.categories.map((category, categoryIndex) => {
        return (
          <Category key={categoryIndex} title={category}>
            {context.selectList.map((item) => {
              if (category === item.category) {
                const handleIconClick = () => context.addSelected(item)
                return (
                  <Item key={item.key} onIconClick={handleIconClick}>
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
}

export default SelectList

import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  const context = React.useContext(DataContext)
  const { title } = props

  return (
    <div className="react-awesome-selector-selected-list">
      {title && (
        <div className="react-awesome-selector-selected-list-title">
          {title}
        </div>
      )}
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

SelectedList.propTypes = {
  title: PropTypes.string,
}

export default SelectedList

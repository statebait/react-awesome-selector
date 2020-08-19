import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category.jsx'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

function SelectList(props) {
  const context = React.useContext(DataContext)
  const { title, categorize } = props

  return (
    <div className="react-awesome-selector-select-list">
      {title && (
        <div className="react-awesome-selector-select-list-title">{title}</div>
      )}
      {categorize ? (
        context.categories.map((category, categoryIndex) => {
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
        })
      ) : (
        <div>
          {context.selectList.map((item) => {
            const handleIconClick = () => context.addSelected(item)
            return (
              <Item key={item.key} onIconClick={handleIconClick}>
                {item.name}
              </Item>
            )
          })}
        </div>
      )}
    </div>
  )
}

SelectList.propTypes = {
  title: PropTypes.string,
  categorize: PropTypes.bool.isRequired,
}

export default SelectList

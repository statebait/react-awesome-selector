import React from 'react'
import Item from './Item.jsx'
import { DataContext } from './DataContext.jsx'

const SelectedList = (props) => {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    setItems(props.items)
  }, [props.items, setItems])

  return (
    <DataContext.Consumer>
      {(context) => (
        <div className="react-awesome-selector-selected-list">
          <span className="react-awesome-selector-selected-list-title">
            {props.title}
          </span>
          {items.map((item) => {
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

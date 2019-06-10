import React from 'react'

function Item(props) {
  return (
    <div className="react-awesome-selector-item">
      {props.children}
      {props.selected ? (
        <img
          onClick={() => {
            props.onIconClick()
          }}
          src={require('./assets/icons/times.svg')}
          className="react-awesome-selector-item-icon"
        />
      ) : (
        <img
          onClick={() => {
            props.onIconClick()
          }}
          src={require('./assets/icons/plus-solid.svg')}
          className="react-awesome-selector-item-icon"
        />
      )}
    </div>
  )
}

export default Item

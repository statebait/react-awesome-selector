import React from 'react'

function Item(props) {
  const handleClick = () => props.onIconClick()

  const imageSrc = require(props.selected
    ? './assets/icons/times.svg'
    : './assets/icons/plus-solid.svg')

  return (
    <div className="react-awesome-selector-item">
      {props.children}
      <img
        className="react-awesome-selector-item-icon"
        alt="none"
        onClick={handleClick}
        src={imageSrc}
      />
    </div>
  )
}

export default Item

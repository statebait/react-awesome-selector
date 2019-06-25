import React from 'react'

function Item(props) {
  return (
    <div className="react-awesome-selector-item">
      {props.children}
      {props.selected ? (
        <img
          alt="none"
          onClick={() => {
            props.onIconClick()
          }}
          src={require('./assets/icons/times.svg')}
          style={{
            marginRight: '5%',
            marginLeft: '5%',
            width: '0.5rem',
            height: 'auto',
          }}
        />
      ) : (
        <img
          alt="none"
          onClick={() => {
            props.onIconClick()
          }}
          src={require('./assets/icons/plus-solid.svg')}
          style={{
            marginRight: '5%',
            marginLeft: '5%',
            width: '0.5rem',
            height: 'auto',
          }}
        />
      )}
    </div>
  )
}

export default Item

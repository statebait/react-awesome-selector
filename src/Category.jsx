import React from 'react'

class Accordion extends React.Component {
  state = { isOpen: false }
  render() {
    const { title, children } = this.props
    const { isOpen } = this.state
    const rotate = isOpen ? { transform: 'rotate(90deg)' } : {}
    return (
      <div className="react-awesome-selector-category">
        <div>
          <span
            onClick={() => {
              this.setState({
                isOpen: !isOpen,
              })
            }}
          >
            <img
              src={require('./assets/icons/angle-right.svg')}
              alt="none"
              style={{
                marginRight: '5%',
                marginLeft: '5%',
                width: '0.5rem',
                height: 'auto',
                ...rotate,
              }}
            />
          </span>
          <span className="react-awesome-selector-category-title">{title}</span>
        </div>
        {this.state.isOpen ? (
          <div className="react-awesome-selector-category-children">
            {children}
          </div>
        ) : (
          <React.Fragment />
        )}
      </div>
    )
  }
}

export default Accordion

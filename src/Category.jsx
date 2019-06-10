import React from 'react'

class Accordion extends React.Component {
  state = { isOpen: false }
  render() {
    const { title, children } = this.props
    const { isOpen } = this.state
    const rotate = isOpen ? 'rotate' : ''
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
              className={`react-awesome-selector-category-icon ${rotate}`}
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

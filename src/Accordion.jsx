import React from 'react'

class Accordion extends React.Component {
  state = { isOpen: false }
  render() {
    const { title, children } = this.props
    const { isOpen } = this.state
    const rotate = isOpen ? 'rotate' : ''
    return (
      <div className="accordion">
        <div>
          <span className="accordion-title">{title}</span>
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
              className={`accordion-icon ${rotate}`}
            />
          </span>
        </div>
        {this.state.isOpen ? children : <React.Fragment />}
      </div>
    )
  }
}

export default Accordion

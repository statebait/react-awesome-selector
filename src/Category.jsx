import React from 'react'
import PropTypes from 'prop-types'

const Category = (props) => {
  const [open, setOpen] = React.useState(false)
  const { title, children } = props

  const handleOpen = () => setOpen((c) => !c)

  return (
    <div className="react-awesome-selector-category">
      <div
        className="react-awesome-selector-category-title"
        onClick={handleOpen}
      >
        <img
          src={require('./assets/icons/angle-right.svg')}
          alt="none"
          className={open ? 'react-awesome-selector-rotate' : ''}
        />
        <span>{title}</span>
      </div>
      {open && (
        <div className="react-awesome-selector-category-children">
          {children}
        </div>
      )}
    </div>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Category

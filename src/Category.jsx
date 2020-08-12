import React from 'react'

const Category = (props) => {
  const [open, setOpen] = React.useState(false)
  const { title, children } = props

  const handleOpen = () => setOpen((c) => !c)

  return (
    <div className="react-awesome-selector-category">
      <div>
        <span onClick={handleOpen}>
          <img
            src={require('./assets/icons/angle-right.svg')}
            alt="none"
            className={`react-awesome-selector-category-icon ${
              open ? 'rotate' : ''
            }`}
          />
        </span>
        <span className="react-awesome-selector-category-title">{title}</span>
      </div>
      {open && (
        <div className="react-awesome-selector-category-children">
          {children}
        </div>
      )}
    </div>
  )
}

export default Category

import React from 'react'
import { SelectedContext } from './SelectedContext'
import './style.css'

function Category(props) {
  const [list, setList] = React.useState('')
  const [arrowClass, setArrowClass] = React.useState('')

  function handleDropdown() {
    if (list) {
      setArrowClass('')
      return setList('')
    } else {
      setArrowClass('rotate')
      return setList(
        <SelectedContext.Consumer>
          {context => (
            <ul className="list-group list-group-flush">
              {props.dataset.map(item => {
                return (
                  <li key={item.name} className="list-group-item">
                    {item.name}
                    <button
                      style={{ float: 'right' }}
                      className="btn btn-primary"
                      onClick={e => {
                        onClickItem(e, item, context.addSelected)
                      }}
                    >
                      Add
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </SelectedContext.Consumer>
      )
    }
  }

  function onClickItem(e, item, addSelected) {
    addSelected(item)
  }

  const onClickCategory = async (e, set, addSelected) => {
    for (let i = 0; i < set.length; i++) {
      await addSelected(set[i])
    }
  }

  return (
    <SelectedContext.Consumer>
      {context => (
        <div className="list-group-item">
          <div style={{ paddingBottom: 30 }}>
            <img
              alt=""
              onClick={handleDropdown}
              className={arrowClass}
              style={{ marginRight: 10, height: 15, width: 15 }}
              src={require('../assets/icons/angle-right.svg')}
            />
            {props.category}

            <button
              style={{ float: 'right' }}
              className="btn btn-primary"
              onClick={e =>
                onClickCategory(e, props.dataset, context.addSelected)
              }
            >
              Add
            </button>
          </div>
          {list}
        </div>
      )}
    </SelectedContext.Consumer>
  )
}

export default Category

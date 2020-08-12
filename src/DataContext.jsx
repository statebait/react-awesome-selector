import React from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [state, setState] = React.useState({
    selectList: [],
    selectedList: [],
  })

  const { selectList, selectedList } = state

  const initList = React.useCallback((data) => {
    return setState((prevState) => ({
      ...prevState,
      selectList: data,
    }))
  }, [])

  const contextValue = {
    selectList,
    selectedList,
    initList,
    addSelected: (item) => {
      const newSelectList = selectList.filter(
        (selectItem) => selectItem.key !== item.key
      )
      setState({
        selectList: newSelectList,
        selectedList: [...selectedList, item],
      })
    },
    removeSelected: (item) => {
      const newSelectedList = selectedList.filter(
        (selectedItem) => selectedItem.key !== item.key
      )
      setState({
        selectList: [...selectList, item],
        selectedList: newSelectedList,
      })
    },
  }

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )
}

DataProvider.whyDidYouRender = true

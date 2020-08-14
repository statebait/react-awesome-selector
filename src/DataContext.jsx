import React from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [state, setState] = React.useState({
    selectList: [],
    selectedList: [],
    categories: [],
  })

  const { selectList, selectedList, categories } = state

  const initialize = React.useCallback((data) => {
    return setState((prevState) => ({
      ...prevState,
      selectList: data.selectList,
      categories: data.categories,
    }))
  }, [])

  const addSelected = React.useCallback((item) => {
    return setState((prevState) => ({
      ...prevState,
      selectList: prevState.selectList.filter(
        (selectItem) => selectItem.key !== item.key
      ),
      selectedList: [...prevState.selectedList, item],
    }))
  }, [])

  const removeSelected = React.useCallback((item) => {
    return setState((prevState) => ({
      ...prevState,
      selectList: [...prevState.selectList, item],
      selectedList: prevState.selectedList.filter(
        (selectedItem) => selectedItem.key !== item.key
      ),
    }))
  }, [])

  const contextValue = {
    selectList,
    selectedList,
    categories,
    initialize,
    addSelected,
    removeSelected,
  }

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )
}

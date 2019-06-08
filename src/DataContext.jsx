import React from 'react'

export const DataContext = React.createContext()

export class DataProvider extends React.Component {
  state = {
    selectList: [],
    selectedList: [],
  }

  render() {
    const { selectList, selectedList } = this.state
    return (
      <DataContext.Provider
        value={{
          selectList,
          selectedList,
          initialPopulate: data => {
            this.setState({ selectList: data })
          },
          addSelected: item => {
            const newSelectList = selectList.filter(
              selectItem => selectItem.key !== item.key
            )
            this.setState({
              selectList: newSelectList,
              selectedList: [...selectedList, item],
            })
          },
          removeSelected: item => {
            const newSelectedList = selectedList.filter(
              selectedItem => selectedItem.key !== item.key
            )
            this.setState({
              selectList: [...selectList, item],
              selectedList: newSelectedList,
            })
          },
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

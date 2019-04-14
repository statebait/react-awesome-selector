import React from "react";

export const SelectedContext = React.createContext();

export class SelectedProvider extends React.Component {
  state = {
    list: []
  };

  render() {
    return (
      <SelectedContext.Provider
        value={{
          list: this.state.list,
          addSelected: item => {
            this.setState({ list: [...this.state.list, item] });
          },
          removeSelected: item => {
            for (let i = 0; i <= this.state.list.length; i++) {
              if (this.state.list[i].name === item) {
                this.state.list.splice(i, 1);
                return this.setState({ list: this.state.list });
              }
            }
          },
          resetSelected: () => {
            this.setState({ list: [] });
          }
        }}
      >
        {this.props.children}
      </SelectedContext.Provider>
    );
  }
}

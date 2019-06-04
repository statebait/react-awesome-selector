import React from "react";
import { SelectedProvider, SelectedContext } from "./SelectedContext";
import DataList from "./DataList";
import SelectedList from "./SelectedList";
import SearchBar from "./SearchBar";

class Selector extends React.Component {
  state = {
    display: false,
    data: this.props.data,
    search: ""
  };

  onClick = () => {
    if (this.state.display) {
      this.setState({ display: false });
    } else {
      this.setState({ display: true });
    }
  };

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  onSubmit(e, context) {
    console.log(context.list);
  }

  render() {
    const mainComponent = (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <DataList data={this.state.data} searchInput={this.state.search} />
          <SelectedList />
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SearchBar onSearch={this.onSearch} />
          <SelectedContext.Consumer>
            {context => (
              <button
                className="btn btn-primary"
                onClick={e => this.onSubmit(e, context)}
              >
                Done
              </button>
            )}
          </SelectedContext.Consumer>
        </div>
      </div>
    );
    return (
      <SelectedProvider>
        <SelectedContext.Consumer>
          {context => mainComponent}
        </SelectedContext.Consumer>
      </SelectedProvider>
    );
  }
}

export default Selector;

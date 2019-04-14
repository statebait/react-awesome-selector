import React from "react";
import Popover from "react-popover";
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
          {context => (
            <Popover
              body={mainComponent}
              isOpen={this.state.display}
              preferPlace="below"
              onOuterAction={() => {
                context.resetSelected();
                this.setState({ display: false });
              }}
            >
              <button
                className="btn btn-primary"
                style={{ margin: 20 }}
                onClick={this.onClick}
              >
                {this.props.children}
              </button>
            </Popover>
          )}
        </SelectedContext.Consumer>
      </SelectedProvider>
    );
  }
}

export default Selector;

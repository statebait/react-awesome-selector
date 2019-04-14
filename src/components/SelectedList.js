import React from "react";
import { SelectedContext } from "./SelectedContext";
import SelectedItem from "./SelectedItem";

function SelectedList(props) {
  return (
    <div
      style={{
        width: 200,
        height: 250,
        overflow: "auto",
        marginRight: 50
      }}
    >
      <SelectedContext.Consumer>
        {context => {
          let n = -1;
          return context.list.map(item => {
            n++;
            return (
              <SelectedItem
                key={n}
                data={item}
                remove={() => context.removeSelected(item.name)}
              />
            );
          });
        }}
      </SelectedContext.Consumer>
    </div>
  );
}

export default SelectedList;

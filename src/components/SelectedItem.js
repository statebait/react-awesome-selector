import React from "react";

const SelectedItem = props => {
  return (
    <li key={props.data.value} className="list-group-item">
      {props.data.name}
      <img
        alt=""
        src={require("../assets/icons/times.svg")}
        style={{ height: 15, width: 15, marginLeft: 10 }}
        onClick={props.remove}
      />
    </li>
  );
};

export default SelectedItem;

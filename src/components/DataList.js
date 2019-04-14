import React from "react";
import Category from "./Category";

const DataList = props => {
  let n = -1;
  let filteredData = [];
  props.data.map(category => {
    return category.dataset.filter(item => {
      if (
        item.name.toLowerCase().indexOf(props.searchInput.toLowerCase()) !==
          -1 ||
        category.category
          .toLowerCase()
          .indexOf(props.searchInput.toLowerCase()) !== -1
      ) {
        return filteredData.push(category);
      }
    });
  });
  return (
    <div
      style={{
        width: 300,
        height: 250,
        overflow: "auto",
        marginRight: 50
      }}
    >
      {filteredData.map(item => {
        n++;
        return (
          <Category key={n} category={item.category} dataset={item.dataset} />
        );
      })}
    </div>
  );
};

export default DataList;

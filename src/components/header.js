import React, { Component } from "react";
import SearchBox from "./searchbox"
import FilterButton from "./filterButton"
class TopHeader extends Component {
  state = {};
  render() {
    return <div className="top-container">
        <SearchBox/>
        <FilterButton/>
    </div>;
  }
}

export default TopHeader;

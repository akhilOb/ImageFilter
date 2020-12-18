import React, { Component } from "react";
import { connect } from "react-redux";

import { filterOutFromJson } from "../actions/action";

class FilterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // filterOut(data) {
  //   alert("hi", data);
  //   this.props.filterOutFromJson("cat");
  // }
  displaycategoryButtons=(data)=>{
    let buttonArray=[];
    let jsxArray=[];
    data.forEach(element => {
      console.log(element, "element inforEach");
      if(!buttonArray.includes(element.name)){
        buttonArray.push(element.name);
      }
    });
    console.log(buttonArray,"buttonArray")
    buttonArray.map(butt=>{
      jsxArray.push(
      <button value={butt}
        onClick={() => this.props.filterOutFromJson(this.props.result, butt)}
      >
        {butt}
      </button>)
    })
    return jsxArray;
  }

  render() {
    console.log(this.props.result, "result in button");
    return (
      <div className="filter-buttons">
        {this.displaycategoryButtons(this.props.result)}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  filterOutFromJson: (data, currentResult) =>
    dispatch(filterOutFromJson(data, currentResult)),
});
const mapStateToProps = (state) => ({
  result: state.result,
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);

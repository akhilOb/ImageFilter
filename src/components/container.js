import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setDataFromJson } from "../actions/action";
import TopHeader from "./header";
import ImageBody from "./body";

class Container extends Component {
  state = {};
  componentDidMount() {
    const prop = this.props;
    this.getingData(prop);
  }
  getingData = (prop) => {
    const res = axios
      .get(`http://localhost:3001/data`)
      .then(function (response) {
        if (response.status === 200) {
          prop.setDataFromJson(response.data);
        }
      });
  };
  render() {
    console.log(this.props.result, "prop result in container render");
    return (
      <div className="container">
        <TopHeader />
        <ImageBody />
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//     GetDataFromJson: () =>
//       dispatch(GetDataFromJson()),
//   });
const mapStateToProps = (state) => ({
  result: state.result,
});
export default connect(mapStateToProps, { setDataFromJson })(Container);

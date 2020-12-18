import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterOutFromJson } from "../actions/action";
import Icon from 'react-icons-kit';
import { FaSearch } from "react-icons/fa";


class SearchBox extends Component {
    state = { 
        searchKey:''
     }
    render() { 
        console.log(this.state.searchKey, "this.state.searchKey")
        return ( 
            <div className="search-container">
            <form>
                <input className="searchbox" type="text" placeholder="search" onChange={(e)=>{this.setState({searchKey:e.target.value})}}/>
                <button type="button" className="icon-span" onClick={() => this.props.filterOutFromJson(this.props.result, this.state.searchKey)}>
                    <FaSearch/>
                </button>
            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
import React, { Component } from 'react';
import { connect } from "react-redux";

import Images from "./images"
class ImageBody extends Component {
    state = {  }
    displayImages=(data)=>{
        let imageArray=[]
        data.map(image=>{
            imageArray.push(<Images dataPropPath={image.path}/>)
        })
        return imageArray;
    }
    render() { 
        console.log(this.props.filterd, "filterd in body")
        return (
            <div className="body-part">
                 {this.displayImages(this.props.filterd)}
            </div>
         );
    }
}
const mapStateToProps = (state) => ({
    result: state.result,
    filterd: state.filterd
  });
export default connect(mapStateToProps)(ImageBody);
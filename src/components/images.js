import React, { Component } from 'react';
class Images extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="image-div">
                <img className="image" src={this.props.dataPropPath}/>
            </div>
         );
    }
}
 
export default Images;
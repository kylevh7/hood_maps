import React, {Component} from 'react';
import Venuelist from "./venueList"


class Sidebar extends Component {
    render(){
        return(
            <div id="sideBar">
                <input type={"search"} id={"search"} onChange={this.props.handleChange} placeholder={"filter locations"} />
                <Venuelist {...this.props} listItem={this.props.listItem} />
            </div>
        )
    }

}
export default Sidebar

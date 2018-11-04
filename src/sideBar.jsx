import React, {Component} from 'react';
import Venuelist from "./venueList"


class Sidebar extends Component {
    render(){
        return(
            <div id="sideBar">
                <input type={"search"} id={"search"} placeholder={"filter locations"} />
                <Venuelist {...this.props} />
            </div>
        )
    }

}
export default Sidebar

import React, {Component} from 'react';
import Listitem from "./listItem"

class Venuelist extends Component {
    render(){
        return(
            <div id="venue">
                <ol id="ol">
                {this.props.venues && this.props.venues.map((venue, index)=><Listitem key={index} {...venue} />)}
                </ol>
            </div>
        )
    }

}
export default Venuelist

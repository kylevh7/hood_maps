import React, {Component} from 'react';
import Listitem from "./listItem"

class Venuelist extends Component {
    render(){
        return(
            <div id="venue">
                <ol>
                <Listitem />
                </ol>
            </div>
        )
    }

}
export default Venuelist

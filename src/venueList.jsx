import React, {Component} from 'react';
import Listitem from "./listItem"

class Venuelist extends Component {
    render(){
        return(
            <div id="venue">
                <ol id="ol">
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                </ol>
            </div>
        )
    }

}
export default Venuelist

import React, {Component} from 'react';

class Listitem extends Component {
    render(){
        return(
            <li className="listItem" onClick={()=> this.props.listItem(this.props)}>
                {this.props.name}
            </li>
        )
    }

}
export default Listitem

import React, {Component} from 'react';

class Listitem extends Component {
    render() {
        return (<li className="listItem" role="listitem" onClick={() => this.props.listItem(this.props)}>
            {this.props.name}
        </li>)
    }

}
export default Listitem

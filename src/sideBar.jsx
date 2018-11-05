import React, {Component} from 'react';
import Venuelist from "./venueList"



class Sidebar extends Component {

    textValue=(e)=>{
    const val = this.myValue.value
    this.props.handleChange(val)
    e.preventDefault()
    }

    render() {
        return (<div id="sideBar">
            <form onSubmit={this.textValue}>
                <label>
                    <input
                        type={"text"}
                        id={"search"}
                        ref={(value)=>this.myValue=value}
                        placeholder={"Search locations"}/>
                </label>

            </form>

            <Venuelist {...this.props} listItem={this.props.listItem}/>
        </div>)
    }

}
export default Sidebar

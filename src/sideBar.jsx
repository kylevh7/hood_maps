import React, {Component} from 'react';
import Venuelist from "./venueList"



class Sidebar extends Component {

    textValue=()=>{
    const val = this.myValue.value
    this.props.handleChange(val)
    }
    
    render() {
        return (<div id="sideBar">
            <form>
                <label>
                    <input
                        type={"text"}
                        id={"search"}
                        ref={(value)=>this.myValue=value}
                        onChange={this.textValue.bind(this)}
                        placeholder={"Search locations"}/>
                </label>
                <input type={"submit"} value={"Search"}/>
            </form>

            <Venuelist {...this.props} listItem={this.props.listItem}/>
        </div>)
    }

}
export default Sidebar

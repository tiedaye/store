import React,{ Component } from "react"
import Menu from "./../Menu"
export default class DImg extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <img src={this.props.row.img} alt=""/>
                {this.props.row.product_name}
            </div>
        )
    }
}
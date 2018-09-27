import React,{Component} from "react"
import "../asset/css/Menu.css"
export default class Menu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <div className="menu">
                    <div className="title">{this.props.title}</div>
                    {this.props.children}
                </div>
        )
    }
}
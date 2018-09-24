import React,{ Component } from "react"
import DImg from "./detail/DImg"
import "whatwg-fetch"
export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state= {
            row: {},
            results: []
        }

    }
    componentWillMount(){
        fetch("http://www.xiechenxi.cn/welcome/detail/"+this.props.match.params.id)
            .then(res=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
            this.setState({
                row:data.row,
                results:data.results
            });
            console.log(data)
        })
    }

    render(){
        return(
            <div>
                <DImg row={this.state.row} result={this.state.results}></DImg>
            </div>
        )
    }
}
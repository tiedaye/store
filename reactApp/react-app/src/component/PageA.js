import React,{ Component } from "react";
// class PageA extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <div>
//                 我是A页面
//                 {this.match.params.id}
//             </div>
//         )
//     }
// }
const PageA = (props)=>{
    return (
        <div>
            我是A页面
            {props.match.params.id}
        </div>
    )
};
export default PageA;
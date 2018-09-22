import React,{ Component } from "react"
export default class Ad extends Component{
    render(){
        return(
            <div>
                <ul className="total">
                    <li className="ad">
                        <p className="font we">我们约会吧</p>
                        <p className="down-font">恋家人好朋友</p>
                        <img src={ require("../asset/img/activity1.png")} alt=""/>
                    </li>
                    <li className="ad">
                        <p className="font low">低价超值</p>
                        <p className="down-font">十元惠生活</p>
                        <img src={ require("../asset/img/activity2.jpg")} alt=""/>
                    </li>
                    <li className="ad">
                        <p className="font work">工作简要</p>
                        <p className="down-font">实惠生活选择多</p>
                        <img src={ require("../asset/img/activity3.png")} alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}
import React,{Component} from "react"
// import Axios from 'axios'
export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            foodList:[
                {pic:require("./../asset/img/activity1.png"),
                 name:"woshijksa",
                 money:"sjakdadad",
                    price:10
                },
                {pic:require("./../asset/img/activity1.png"),
                 name:"woshijksa",
                    money:"sjakdadad",
                    price:1
                },
                {pic:require("./../asset/img/activity3.png"),
                 name:"zVXz ",
                    money:"sjakdadad",
                    price:80
                },
                {pic:require("./../asset/img/activity2.jpg"),
                  name:"sdszc",
                    money:"sjakdadad",
                    price:60
                },
                 {pic:require("./../asset/img/activity1.png"),
                 name:"dcsz",
                     money:"sjakdadad",
                     price:10
                 }

            ]
        }
    }
    render(){
        // Axios.get('https://bird.ioliu.cn/v1?url=http://www.xiechenxi.cnstart='+this.foodList.length+'&count=5')
        //     .then((res)=>{
        //         console.log(1111)
        //     });
        return (
                <ul className="menu">
                    {
                        this.state.foodList.map((elem,index)=>{
                            return (
                                <li key={index} className="menu-li">
                                    <img src={elem.pic} alt=""/>
                                    <div>
                                        <p>{elem.name}</p>
                                        <p>{elem.money}</p>
                                        <span className="price">{elem.price} </span>
                                        门市价：{elem.price}元
                                        <span className="sale">已售{elem.price}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
        )
    }
}
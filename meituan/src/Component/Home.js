import React,{ Component } from "react"
import "whatwg-fetch"
import "../asset/css/Home.css"
import {  Icon,SearchBar,Grid,NavBar} from 'antd-mobile';
import Ad from "./Ad"
import Menu from "./Menu"
import Product from "./Product"
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
            {
                icon:require('./../asset/img/img1.png'),
                text:"美食"
            },
            {
                icon:require('./../asset/img/img2.png'),
                text:"电影"
            },
            {
                icon:require('./../asset/img/img3.png'),
                text:"酒店"
            },
            {
                icon:require('./../asset/img/img4.png'),
                text:"娱乐"
            },
            {
                icon:require('./../asset/img/img5.png'),
                text:"外卖"
            },
            {
                icon:require('./../asset/img/img6.png'),
                text:"ktv"
            },
            {
                icon:require('./../asset/img/img7.png'),
                text:"周边游"
            },
            {
                icon:require('./../asset/img/img8.png'),
                text:"丽人"
            },
            {
                icon:require('./../asset/img/img9.png'),
                text:"小吃"
            },
            {
                icon:require('./../asset/img/img10.png'),
                text:"机票"
            },
            {
                icon:require('./../asset/img/img1.png'),
                text:"美食"
            },
            {
                icon:require('./../asset/img/img2.png'),
                text:"电影"
            },
            {
                icon:require('./../asset/img/img3.png'),
                text:"美食"
            },
            {
                icon:require('./../asset/img/img4.png'),
                text:"电影"
            }
            ],
            foodList:[]
        }
    }
    componentWillMount(){
        fetch("http://www.xiechenxi.cn").then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({
                foodList: data
            });
            console.log(data)
        })
    }
        render()
        {
            return (
                <div>
                    <NavBar mode="dark" leftContent="哈尔滨"
                            rightContent={[
                                <Icon key="1" type="ellipsis" />,
                            ]}>
                        <SearchBar  placeholder="请输入搜索内容" />
                    </NavBar>
                    <Grid data={this.state.data} isCarousel hasLine={false} columnNum={5}/>
                    <Ad></Ad>
                    <Menu title="猜你喜欢">
                        {
                            this.state.foodList.map((elem,index)=>{
                                return (
                                    <Product key={elem.product_id} elem={elem}></Product>
                                )
                            })
                        }
                    </Menu>
                </div>);
        }
}
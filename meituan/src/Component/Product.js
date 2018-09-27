import React,{Component} from "react"
import "../asset/css/Product.css"
import { withRouter } from "react-router-dom"
export default withRouter(class Product extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="product" onClick={()=>{
                console.log(this.props);
                this.props.history.push("/detail/"+this.props.elem.product_id);
            }}>
                <li className="product-li">
                    <img src={this.props.elem.img} alt=""/>
                    <div>
                        <p>{this.props.elem.product_name}</p>
                        <p>{this.props.elem.description}</p>
                        <span className="price">{this.props.elem.price} </span>
                        门市价：{this.props.elem.discount_price}元
                        <span className="sale">已售{this.props.elem.num}</span>
                    </div>
                </li>
            </ul>
        )
    }
})
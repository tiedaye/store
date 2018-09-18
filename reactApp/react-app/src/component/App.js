import React, { Component } from 'react';
import { connect }from "react-redux"
import store from "../store";
const act = (num)=>{
  return {
    type:"SUB",
    text:num
  }
};
class App extends Component {
  sub(num){
    store.dispatch(act(num));
    //自动传给reducer，然后在reducer中就可以调用了
  }
  render(){
    return (
        <div>
            <h1>{this.props.count}</h1>
            <button onClick={()=>{
                  this.props.act(3);
               }
          }>sub</button>
       <button onClick={this.sub.bind(this,2)}>sub</button>
        </div>
    );
  }
}
const mapStateToProps =(state) =>{
  return{
      count:state.count
  }
};
//或者
// const mapStateToProps =(state) =>({
//         count:state.count
// });
const mapDispatchToProps = (dispatch)=>{
         return{
           act:(xx)=>{dispatch(act(xx))}
         }
};
export default connect (mapStateToProps,mapDispatchToProps)(App);

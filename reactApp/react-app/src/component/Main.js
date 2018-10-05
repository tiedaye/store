import React,{ Component } from "react";
import	{ BrowserRouter as Router, Route ,Link,Switch,Redirect,Prompt,NavLink } from "react-router-dom"
import PageA from "./PageA";
import PageB from "./PageB";
import Home from "./Home";
import Children from "./Children";
// const Jump = (props)=>{
//     return <Link to={props.to}>Jump</Link>
// };
const web = (props)=>{
    return (
            <div>
                <button onClick={()=>{
                    props.history.push("/bb")
                }}>click</button>
            </div>
        )

 };
class Jump extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Link to={this.props.to}>Jump</Link>
        )
    }
}
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    render(){
        return (
            <div>
                main主页面
                <Router>
                    <div>
                        <NavLink activeClassName="selected"
                                 activeStyle={{color:"red"}} to="/">跳转Home</NavLink>
                        --------
                        <NavLink to="/aa/4" activeClassName="selected" activeStyle={{color:"red"}} >跳转A</NavLink>
                        --------
                        <NavLink to="/bb">跳转B</NavLink>
                        --------
                        <NavLink isActive={(props)=>{
                            console.log(props)
                             }} to="/render">跳转render</NavLink>
                        --------
                        <NavLink to="/children/2">跳转child</NavLink>
                        --------
                        <NavLink to="/cc">编程式导航</NavLink>
                        {/*<Switch>*/}
                            {/*<Route path="/aa" component={PageA}></Route>*/}
                            {/*<Route path="/bb" component={PageB}></Route>*/}
                            {/*<Route path="/" component={Home}></Route>*/}
                        {/*</Switch>*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/aa/:id" component={PageA}></Route>
                        <Route path="/bb" component={PageB}></Route>
                        <Route path="/render" render={()=>{
                            // return <h1>我是render页面</h1>
                           return <Redirect to="/bb"></Redirect>
                        }}></Route>
                        <Route path="/children/:num" children={Children}></Route>
                        <Jump to="/"></Jump>
                        <Route path="/cc" component={web}></Route>
                        <Prompt when={this.state.show} message={"是否离开当前页面"}></Prompt>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Main;
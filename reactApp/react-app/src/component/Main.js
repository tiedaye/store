import React,{ Component } from "react";
import	{ BrowserRouter as Router, Route ,Link,Switch } from "react-router-dom"
import PageA from "./PageA";
import PageB from "./PageB";
import Home from "./Home";
import Children from "./Children";
class Main extends Component{
    render(){
        return (
            <div>
                main主页面
                <Router>
                    <div>
                        <Link to="/">跳转Home</Link>
                        --------
                        <Link to="/aa/4">跳转A</Link>
                        --------
                        <Link to="/bb">跳转B</Link>
                        --------
                        <Link to="/render">跳转render</Link>
                        --------
                        <Link to="/children/2">跳转child</Link>
                        {/*<Switch>*/}
                            {/*<Route path="/aa" component={PageA}></Route>*/}
                            {/*<Route path="/bb" component={PageB}></Route>*/}
                            {/*<Route path="/" component={Home}></Route>*/}
                        {/*</Switch>*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/aa/:id" component={PageA}></Route>
                        <Route path="/bb" component={PageB}></Route>
                        <Route path="/render" render={()=>{
                            return <h1>我是render页面</h1>
                        }}></Route>
                        <Route path="/children/:num" children={Children}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Main;
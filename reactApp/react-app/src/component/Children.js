import React,{ Component } from "react";
const children = ({match})=>{
    return(
        <div>
            我是child页面
            {
                match? match.params.num:1
            }
        </div>
    )
};
export default children;
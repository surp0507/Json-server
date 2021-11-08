import React from "react";

class Nav extends React.Component{
    constructor(){

        super();
        this.state={
         show:true

        }
    }
    hide(){
      this.setState({
        show:!this.state.show
      })

    }

render(){


    return (
        <>
             {/* {this.state.show?
             <h2>ananya is hide if you click</h2>
             :null
             }
            <p> <button onClick={()=>{this.hide()}}>hide</button></p> */}
        </>
    )
}



}

export default Nav;

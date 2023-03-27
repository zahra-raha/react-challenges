import { Component } from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: "Hello, guest!" ,
            buttonText: "Log in",
        }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) =>
        ({
            message: prevState.message === "Hello, guest!" ? "Welcome user!" : "Hello, guest!" , 
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in" ,
            
        })
        ,() => console.log("new state", this.state.buttonText));
    }

    render(){
        return <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        </div>
    }
}
export default NavBarSimple
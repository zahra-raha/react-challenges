import { Component } from "react"
import css from "./css/NavBarForm.module.css"
import NavBarChild from "./NavBarChild";

class NavBarForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoggedIn: false,
            buttonText: "Log in",
        }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) =>
        ({
            isLoggedIn: prevState.isLoggedIn ? false : true,
            buttonText: prevState.buttonText === "Log in" ? "Submit" : "Log in" ,
            
        })
        ,() => console.log("new state", this.state.buttonText));
    }

    render(){
        return <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <NavBarChild isLoggedIn={this.state.isLoggedIn} buttonText={this.state.buttonText} handleClick={this.handleClick} />
        </div>
    }
}
export default NavBarForm
import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
            <form>
            <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="password"/>
            </form>
                <button onClick={props.handleClick}>{props.buttonText}</button>
            </div>
        ) : (
            <div> 
                <button onClick={props.handleClick}>{props.buttonText}</button>
            </div>

        )}
    </div>
  )
}

export default NavBarChild
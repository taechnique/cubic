import React from 'react'
import logo from '../resource/logo.png'
import '../styles/logo.css'
function Logo(props){

    
    const LogoClickHandler = (e) => {
        //logo click event
        alert("z");
    }

    return(
        <div className="logoBox"  onClick={LogoClickHandler}>
            <img className="logoArea" src={logo} width="145" height="45" alt="Cubic logo"  />
        </div>
    )
}

export default Logo
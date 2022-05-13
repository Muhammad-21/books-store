import React from 'react'
import logo from '../assets/img/logo.svg'
import 'animate.css';

export default function Welcome() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",position:"absolute",top:"0",width:"100%",height:"100%",background:"whitesmoke"}}>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <img className="animate__animated animate__slideInDown" src={logo} width="150px"/>
            <h2>Добро пожаловать!</h2>
        </div>
    </div>
  )
}

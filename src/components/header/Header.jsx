import React from "react";
import '/src/components/header/Header.css'
import '/src/components/global.css'
// import lucas from '/src/assets/lucas.jpg'

export default function Header() {
    return (
        <div className="header">
           <nav>
                <a href="">Home</a>
                <a href="">Projetos</a>
                <a href="">Sobre</a>
                
           </nav>
           {/* <img src={lucas} alt="" /> */}
        </div>
    )
}
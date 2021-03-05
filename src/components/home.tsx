import React from "react";
import  yo  from "../static/img/yo.jpg";
import "../css/home.scss";

function Home(){
    return(
        <div>
            <img src={yo} alt=""/>
            <p>Óscar Carballar</p>
            <p>Actualmente estoy haciendo practicas del grado superior de DAW en Ayersa. Full stack developer. Angular/React.</p>
            <div className="redes">
                <a href="https://www.linkedin.com/in/oscar-carballar-113882162/">Linkedin</a>
                <a href="https://github.com/Oskitaa">GitHub</a>
                <a href="mailto:oscarcarboc@gmail.com">Email</a>
            </div>
        </div>
    );
}

export default Home;
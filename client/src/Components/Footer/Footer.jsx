import React from "react"
import Style from "./Footer.module.css"
import github from "../../Images and Videos/Footer/github.png"
import linkedin from "../../Images and Videos/Footer/linkedin.png"

export default function Footer () {
    return (
        <div className={Style.Main}>
            <div className={Style.Description}>
                <span>Developed by Gabriel Cruz ©2022</span>
                {/* <span>©2022</span> */}
            </div>
            <div className={Style.Links}>
                        <a href="https://github.com/GabrielAndresCruz" target="blank">
                            <img src={github} className={Style.Github}/>
                        </a>
                        <a href="https://www.linkedin.com/in/gabrielandrescruz/" target="blank">
                            <img src={linkedin} className={Style.Linkedin} />
                        </a>
            </div>
        </div>
    )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './LandingPage.module.css'
import videoDog from '../../Images and Videos/HEspinosaFilmsDog.mp4'

export default function LandingPage (){
    return (
        <div className={style.back}>
            <div className={style.overlay}></div>
            <video src={videoDog} autoPlay loop muted/>
            <div className={style.content}>
            <h1>House of Breeds</h1>
            <NavLink to='/home'>
                <button>Enter</button>
            </NavLink>
            </div>
        </div>
    )
}
import React from 'react';
import Dog from '../../Images and Videos/Loading and NotFound/NotFound.png'
import Style from './NotFound.module.css'

export default function NotFound() {
	return (
		<div>
            <img src={Dog} alt="" className={Style.Dog}/>
        </div>
	);
}

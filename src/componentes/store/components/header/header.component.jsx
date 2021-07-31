import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss'

import {ReactComponent as Logo} from '../../../../assets/crown.svg'

const  HeaderComponent =() => {
    return (
        <div className ="header">
            <Link className="logo-container" to="/store">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
            </div>
            
        </div>
    )
}

export default HeaderComponent;

import React from 'react'
import '../../style/main.scss';
import { NavLink } from 'react-router-dom';

const HeaderTop = (props) => {
    return (
        <header
            className="header"
            style={{ backgroundImage: 'url(./imgs/topBg.jpg)' }}>
            <div className="header__wrap"
            style={{ backgroundImage: 'url(./imgs/topBgMob.jpg)' }}>
                <div className="container">
                    <h1 className="title header__title">
                        Make me up!
                </h1>
                    <div className="header__nav">
                        <NavLink to="/matches" className="header__item btn">
                            Matches
                    </NavLink>
                        <NavLink to="/battles" className="header__item btn">
                            Battles
                    </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderTop;
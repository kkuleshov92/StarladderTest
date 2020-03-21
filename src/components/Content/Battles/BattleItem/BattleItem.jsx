import React from 'react';
import '../../../../style/main.scss'

const BattleItem = (props) => {
    
    return (
        <a href="#" 
            className={`battle ${props.battleStatus}`} 
            onClick={props.onbattleClickHandler}>
            <svg className="svgStar" width="182" height="164" viewBox="0 0 182 164" xmlns="http://www.w3.org/2000/svg">
                <path d="M181.767 155.832L117.839 103.14L6.56497 164L71.1271 58.3003L0 0H113.255H182L181.767 155.832Z" 
                    stroke="rgba(151, 151, 151, .1)"
                    strokeWidth="1px"
                    fill={props.starColor}
                    />
                <defs>
                    <linearGradient id="Gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="38.93%" stopColor="#F3FCFF"/>
                        <stop offset="97.32%" stopColor="#E1E5EE" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="battle__type">
                {props.type}
            </span>
            <p className="battle__table">
                <span className="battle__time"> 
                    {props.time}
                </span>
                <span className="battle__date">
                    {props.date}
                </span>
            </p>
            <p className="battle__liveTime">
                <img src="./imgs/playIcon.png" alt="live" className="battle__playIcon"/>
                <span className="battle__watch">
                    Watch Live!
                </span>
            </p>
            <div className="battle__subject">
                <img src={`./imgs/${props.subject}`}/>
            </div>
            <div className="battle__event">
                <div className='battle__groups'>
                    <span className="battle__groupItem">
                        Group {props.group1}
                    </span>
                    <span className="battle__groupItem battle__groupItem_2">
                        Group {props.group2}
                    </span>
                </div>
                <div className='battle__num'>
                    Match #{props.num}
                </div>
            </div>
            <div className="battle__info">
                <img src="./imgs/cup.svg" alt="cup" className="battle__cup" />
                {props.leftTime}
                {props.winner}
                {props.map}
            </div>
        </a>
    )
}

export default BattleItem;
import React from 'react';
import '../../../../style/main.scss'

const MatchItem = (props) => {

    return (
        <a href="#" 
            className={`match ${props.matchStatus}`} 
            onClick={props.onMatchClickHandler}>
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
            <span className="match__type">
                {props.type}
            </span>
            <p className="match__table">
                <span className="match__time"> 
                    {props.time}
                </span>
                <span className="match__date">
                    {props.date}
                </span>
            </p>
            <p className="match__liveTime">
                <img src="./imgs/playIcon.png" alt="live" className="match__playIcon"/>
                <span className="match__watch">
                    Watch Live!
                </span>
            </p>
            <div className="match__teams">
                <div className="match__team match__team_1">
                    <img src={`./imgs/teams-logo/${props.teamLogo1}`}/>
                </div>
                <div className="match__team match__team_2">
                    <img src={`./imgs/teams-logo/${props.teamLogo2}`}/> 
                </div>
            </div>
            <ul className="match__bet">
                <li className={`match__ratio ${props.lose1}`}>
                    <span className="match__team-name">
                        {props.teamName1}
                    </span>
                    <span className="match__coef">
                        {props.teamCoef1}
                    </span>
                    <span className="match__score">
                        {props.scoreTeam1}
                    </span>
                </li>
                <li className={`match__ratio match__ratio_2 ${props.lose2}`}>
                    <span className="match__team-name">
                        {props.teamName2}
                    </span>
                    <span className="match__coef">
                        {props.teamCoef2}
                    </span>
                    <span className="match__score">
                        {props.scoreTeam2}
                    </span>
                </li>
            </ul>
            <div className="match__info">
                <div className="match__system">
                    {props.system}
                    {props.result}
                </div>
                <div className="match__partner">
                    <img src={`./imgs/${props.partnerLogo}`}/>
                </div>
            </div>
        </a>
    )
}

export default MatchItem;
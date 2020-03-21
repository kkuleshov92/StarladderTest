import React from 'react';
import '../../../style/main.scss'
import BattleItem from './BattleItem/BattleItem';

const Battles = (props) => {

    const battlesList = props.state.map((element) => {
        let statusColor,
            battleStatus = '',
            map = '',
            leftTime = '',
            result = '';

        if (element.table.status === 'live') {
            statusColor = '#EA5656';
            battleStatus = 'live';
            map = element.map;
        } else if (element.table.status === 'soon') {
            statusColor = 'url(#Gradient1)';
            leftTime = element.leftTime;
        } else {
            statusColor = '#F9F9F9';
            battleStatus = 'end';
            result = element.result
        }

        const onBattleClickHandler = (status) => {
            if (!(status === 'live')) {
                return (e) => {
                    e.preventDefault();
                }
            }
        }

        return (
            <BattleItem
                type={element.type}
                time={element.table.time}
                date={element.table.date}
                subject={element.subject}
                leftTime={leftTime}
                partnerLogo={element.partnerLogo}
                starColor={statusColor}
                map={map}
                key={element.id}
                num={element.id}
                winner={element.winner}
                onBattleClickHandler={onBattleClickHandler(element.table.status)}
                battleStatus={battleStatus}
                result={result}
                group1={element.groups[0]}
                group2={element.groups[1]}
            />
        )
    })

    return (
        <div className="container">
            <div className="battleBox">
                {battlesList}
            </div>
        </div>
    )
}


export default Battles;
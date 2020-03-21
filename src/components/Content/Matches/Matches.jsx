import React from 'react';
import '../../../style/main.scss'
import MatchItem from './MatchItem/MatchItem'

const Matches = (props) => {

    const matchesList = props.state.map((element) => {
        let statusColor,
            matchStatus = '',
            lose1 = '',
            lose2 = '',
            system = '',
            result = '';

        if (element.table.status === 'live') {
            statusColor = '#EA5656';
            matchStatus = 'live';
            system = element.system;
        } else if (element.table.status === 'soon') {
            statusColor = 'url(#Gradient1)';
            system = element.system;
        } else {
            statusColor = '#F9F9F9';
            matchStatus = 'end';
            result = element.result

            if (element.teams[0].wins > element.teams[1].wins) {
                lose2 = 'lose';
            } else {
                lose1 = 'lose'
            }
        }

    const onMatchClickHandler = (status) => {
        if (!(status === 'live')) {
            return (e) => {
                e.preventDefault();
            }
        }
    }

    

    return (
        <MatchItem 
            type={element.type}
            time={element.table.time}
            date={element.table.date}
            teamLogo1={element.teams[0].teamLogo1}
            teamLogo2={element.teams[1].teamLogo2}
            teamName1={element.teams[0].teamName1}
            teamName2={element.teams[1].teamName2}
            teamCoef1={element.teams[0].teamCoef1}
            teamCoef2={element.teams[1].teamCoef2}
            system={system}
            partnerLogo={element.partnerLogo}
            starColor={statusColor}
            key={element.id}
            onMatchClickHandler={onMatchClickHandler(element.table.status)}
            matchStatus={matchStatus}
            scoreTeam1={element.teams[0].wins}
            scoreTeam2={element.teams[1].wins}
            lose1={lose1}
            lose2={lose2}
            result={result}
        />
    )
    })

    return (
        <div className="container">
            <div className="matchBox">
                {matchesList}
            </div>
        </div>
    )
}

export default Matches;
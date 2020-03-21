import React, { Component } from 'react';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import { Route, Redirect } from 'react-router-dom';
import Matches from '../components/Content/Matches/Matches';
import Battles from '../components/Content/Battles/Battles';



class Games extends Component {
    state = {
        matches: [
            {
                id: 1,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'live'
                },
                teams: [
                    {
                        teamLogo1: 'team1.png',
                        teamName1: 'Albert Warren',
                        teamCoef1: 3.22,
                        wins: null
                    },
                    {
                        teamLogo2: 'team2.png',
                        teamName2: 'Gloria Henry',
                        teamCoef2: 53.22,
                        wins: null
                    }
                ],
                system: 'Bo 3',
                result: null,
                partnerLogo: 'partner.png'
            },
            {
                id: 2,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'soon'
                },
                teams: [
                    {
                        teamLogo1: 'team3.png',
                        teamName1: 'Regina Watson',
                        teamCoef1: 3.22,
                        wins: null
                    },
                    {
                        teamLogo2: 'team4.png',
                        teamName2: 'Kathryn Jones',
                        teamCoef2: 53.22,
                        wins: null
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: null,
                partnerLogo: 'partner.png'
            },
            {
                id: 3,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'soon'
                },
                teams: [
                    {
                        teamLogo1: 'team2.png',
                        teamName1: 'Ricardo Hawkins',
                        teamCoef1: 3.22,
                        wins: null
                    },
                    {
                        teamLogo2: 'team5.png',
                        teamName2: 'Bruce Simmons',
                        teamCoef2: 53.22,
                        wins: null
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: null,
                partnerLogo: 'partner.png'
            },
            {
                id: 4,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'soon'
                },
                teams: [
                    {
                        teamLogo1: 'team6.png',
                        teamName1: 'Jenny Bell',
                        teamCoef1: 3.22,
                        wins: null
                    },
                    {
                        teamLogo2: 'team7.png',
                        teamName2: 'Arlene Robertson',
                        teamCoef2: 53.22,
                        wins: null
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: null,
                partnerLogo: 'partner.png'
            },
            {
                id: 5,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'end'
                },
                teams: [
                    {
                        teamLogo1: 'team1.png',
                        teamName1: 'Courtney Alexander',
                        teamCoef1: 3.22,
                        wins: 0
                    },
                    {
                        teamLogo2: 'team3.png',
                        teamName2: 'Judith Nguyen',
                        teamCoef2: 53.22,
                        wins: 3
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: '1:0 • 1:0 • 1:0',
                partnerLogo: 'partner.png'
            },
            {
                id: 6,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'end'
                },
                teams: [
                    {
                        teamLogo1: 'team1.png',
                        teamName1: 'Priscilla Fisher',
                        teamCoef1: 3.22,
                        wins: 3
                    },
                    {
                        teamLogo2: 'team4.png',
                        teamName2: 'Arlene Black',
                        teamCoef2: 53.22,
                        wins: 0
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: '1:0 • 1:0 • 1:0',
                partnerLogo: 'partner.png'
            },
            {
                id: 7,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'end'
                },
                teams: [
                    {
                        teamLogo1: 'team5.png',
                        teamName1: 'Cody Howard',
                        teamCoef1: 3.22,
                        wins: 0
                    },
                    {
                        teamLogo2: 'team7.png',
                        teamName2: 'Brandon Mccoy',
                        teamCoef2: 53.22,
                        wins: 3
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: '1:0 • 1:0 • 1:0',
                partnerLogo: 'partner.png'
            },
            {
                id: 8,
                type: 'Asia Minor: Play-Off',
                table: {
                    time: '19:00',
                    date: '29 октября',
                    status: 'end'
                },
                teams: [
                    {
                        teamLogo1: 'team1.png',
                        teamName1: 'Jorge Fox',
                        teamCoef1: 3.22,
                        wins: 0
                    },
                    {
                        teamLogo2: 'team6.png',
                        teamName2: 'Zack Miles',
                        teamCoef2: 53.22,
                        wins: 3
                    }
                ],
                system: 'Starts in: 5 hours 39 min • Bо 3',
                result: '1:0 • 1:0 • 1:0',
                partnerLogo: 'partner.png'
            }
        ],
        battles: [
            {
                id: 1,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'live'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: null,
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 2,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'soon'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: null,
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 3,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'soon'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: null,
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 4,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'soon'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: null,
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 5,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'end'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: 'Natus Vincere (A) - 233pts',
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 6,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'end'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: 'Natus Vincere (A) - 233pts',
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 7,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'end'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: 'Natus Vincere (A) - 233pts',
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            },
            {
                id: 8,
                type: 'Group Stage',
                table: {
                    time: '19:00',
                    date: 'March 8',
                    status: 'end'
                },
                groups : ['A', 'B'],
                subject: 'groupLogo.png',
                winner: 'Natus Vincere (A) - 233pts',
                leftTime: 'Starts in: 5h 39min • Map: Erangel',
                partnerLogo: 'partner.png',
                map: 'Map: Erangel'
            }
        ]
    }

    render() {
        return(
            <div className="App">
                <HeaderTop />
                <div className="content-wrapper">
                    <Route default path='/matches' render={() => <Matches 
                        state={this.state.matches}
                    />}/>
                    <Route path='/battles' render={() => <Battles 
                        state={this.state.battles}
                    />}/>
                    <Route path="/">
                        <Redirect to="/matches" />
                    </Route>
                </div>
            </div>
        )
    }
}

export default Games;
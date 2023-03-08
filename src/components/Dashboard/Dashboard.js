import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerDetailsCard from '../PlayerDetailsCard'
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState([])
    const [playersList, setPlayerslist] = useState([])

    useEffect(() => {
        axios.get("https://api.npoint.io/20c1afef1661881ddc9c").then((res) => {
            const data1 = res.data.playerList
            data1.sort((a, b) => (a.Value > b.Value) ? 1 : ((b.Value > a.Value) ? -1 : 0));
            setData(res.data)
            setPlayerslist(data1)
        })

    }, [])

    const searchPlayers = (event) => {
        const item = event.target.value;
        const search_res = data.playerList.filter((itm) => {
            return (
                itm.PFName?.toLowerCase().includes(item.toLowerCase()) ||
                itm.TName?.toLowerCase().includes(item.toLowerCase())
            );
        });
        setPlayerslist(search_res);
    }
    console.log(data)
    return (
        <>
            <h1>Player Details</h1>
            <div className="player=search">
                <input type="text" className="search-feild" placeholder='Search by TName and PFName' onChange={(event) => searchPlayers(event)} />
            </div>
            <div className="container">
                {playersList.map((playerData) => {
                    return (
                        <PlayerDetailsCard playerData={playerData} className="player-list" key={playerData.Id} />
                    )
                })}

            </div>

        </>
    )
}

export default Dashboard